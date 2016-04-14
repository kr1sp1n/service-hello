const http = require('http');

const port = process.env.PORT || 8580;

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!\n');
});

server.listen(port, '0.0.0.0', function () {
  console.log('Server running at %j', server.address());
});
