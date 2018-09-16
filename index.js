const express = require('express');
const redis = require('redis');
const process = require('process');

require('dotenv').config();

const port = process.env.PORT;

const app = express();

const redisClient = redis.createClient({
  // docker-compose understands host by name of service
  host: 'redis-server',
  port: 6379,
});
redisClient.set('visits', 0);

app.get('/', (req, res) => {
  redisClient.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    redisClient.set('visits', parseInt(visits) + 1);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
