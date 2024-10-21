const {exec} =require('child_process');
const {path}=require('path');
const fs=require('fs');
const {S3Client,PutObjectCommand}=require('@aws-sdk/client-s3');
const {mime}=require('mime-types');

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIAZI2LG4SGRAEW2YZI',
        secretAccessKey: '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'
    }
})

const PROJECT_ID=process.env.PROJECT_ID

async function init(){
    console.log('Execitinh script.js');

    const outdirpath=path.join(__dirname,'output')

    const p=exec(`cd ${outdirpath} && npm install && npm run build`)

    p.stdout.on('data',function(data){
        console.log(data.toString());
    })
    p.stdout.on('error',function(data){
        console.log('Error',data.toString());
    })
    p.on('close',async function(){
        console.log("Build Complete")
        const distfolderpath=path.join(__dirname,'output','dist')
        const distfolderContents=fs.readdirSync(distfolderpath,{recursive:true})

        for (const filepath of distfolderContents){
            if(fs.lstat(filepath).isDirectory()) continue;
            console.log('Uploading');


            const command=new PutObjectCommand({
                Bucket:'gist-deploy',
                key:`__outputs/${PROJECT_ID}/${filepath}`,
                Body:fs.createReadStream(filepath),
                ContentType:mime.lookup(filepath)
            })
            await s3Client.send(command);
            
         }
         console.log('...DOne Dona dan')
    })
}
init();