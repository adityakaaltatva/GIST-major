const express=require('express');
const generateSlug=require('random-word-slugs')
const app=express();

// automated code build 

const PORT=9000;

app.use(express.json());

app.post('/project',(req,res)=>{
    const {gitURL}=req.body
   const projectSlug=generateSlug()

   //spin the container
   
})



app.listen(PORT,()=>console.log(`API server running on ${PORT}`));