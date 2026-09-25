const http = require('http');
const VERSION = process.env.VERSION || 'v1';
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello from Kubernetes CI/CD Demo - Version: ${VERSION}\n`);
}).listen(3000, () => console.log('Server running on port 3000'));
