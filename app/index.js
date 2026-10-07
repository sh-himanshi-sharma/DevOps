const http = require('http');
const redis = require('redis');

const client = redis.createClient({ url: 'redis://redis:6379' });
client.connect();

const VERSION = process.env.VERSION || 'v1';

http.createServer(async (req, res) => {
  const count = await client.incr('hits');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello from Docker Compose Demo v${VERSION}\nTotal hits: ${count}\n`);
}).listen(3000, () => console.log('Server running on port 3000'));