module.exports = function (config) {
  const http = require('http');
  const port = config.port;
  const URL = require('url');
  const qs = require('querystring');
  const greeter = require('./greeter.js')({
    defaultName: config.defaultName,
  });

  const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // parse name out of the URL query part like /?name=Bob
    const data = qs.parse(URL.parse(request.url).query);
    response.end(greeter.sayHello(data.name));
  });

  server.start = function () {
    server.listen(port, '0.0.0.0', function () {
      console.log('Server running at %j', server.address());
    });
  };

  return server;

};
