const express = require('express');
const { generateSlug } = require('random-word-slugs');
const { ECSClient, RunTaskCommand } = require('@aws-sdk/client-ecs');
const { Server } = require('socket.io');
const Redis = require('ioredis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Initialize Redis and Socket.IO
const subscriber = new Redis(process.env.REDIS_URL);
const io = new Server({ cors: '*' });

// ECS Client Configuration
const ecsClient = new ECSClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// ECS Task Configuration
const config = {
  CLUSTER: process.env.AWS_ECS_CLUSTER,
  TASK: process.env.AWS_ECS_TASK,
};

app.use(express.json());

// Socket.IO connection and subscription
io.on('connection', (socket) => {
  socket.on('subscribe', (channel) => {
    socket.join(channel);
    socket.emit('message', `Joined channel: ${channel}`);
  });
});

io.listen(9002, () => console.log('Socket server listening on port 9002'));

// Redis Subscription for logs
async function initRedisSubscribe() {
  console.log('Subscribed to logs...');
  subscriber.psubscribe('logs:*');
  subscriber.on('pmessage', (pattern, channel, message) => {
    io.to(channel).emit('message', message);
  });
}

// POST /project to trigger ECS task
app.post('/project', async (req, res) => {
  const { gitURL, slug } = req.body;

  if (!gitURL) {
    return res.status(400).json({ error: 'GitHub URL is required' });
  }

  const projectSlug = slug || generateSlug();

  try {
    // ECS task command setup
    const command = new RunTaskCommand({
      cluster: config.CLUSTER,
      taskDefinition: config.TASK,
      launchType: 'FARGATE',
      count: 1,
      networkConfiguration: {
        awsvpcConfiguration: {
          assignPublicIp: 'ENABLED',
          subnets: process.env.AWS_SUBNETS.split(','),
          securityGroups: [process.env.AWS_SECURITY_GROUP],
        },
      },
      overrides: {
        containerOverrides: [
          {
            name: 'builder-image',
            environment: [
              { name: 'GIT_REPOSITORY__URL', value: gitURL },
              { name: 'PROJECT_ID', value: projectSlug },
            ],
          },
        ],
      },
    });

    await ecsClient.send(command);

    return res.json({
      status: 'queued',
      data: { projectSlug, url: `http://${projectSlug}.localhost:8000` },
    });
  } catch (error) {
    console.error('ECS task failed:', error);
    return res.status(500).json({ error: 'Failed to trigger ECS task' });
  }
});

initRedisSubscribe();

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
