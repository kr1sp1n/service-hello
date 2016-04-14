module.exports = function (config) {
  const http = require('http');
  const port = config.port;
  const greeter = require('./greeter.js')({
    defaultName: config.defaultName,
  });

  const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(greeter.sayHello());
  });

  server.start = function () {
    server.listen(port, '0.0.0.0', function () {
      console.log('Server running at %j', server.address());
    });
  };

  return server;

};
