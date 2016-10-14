const http = require('http');
const URL = require('url');
const qs = require('querystring');

module.exports = (config) => {
  const port = config.port;
  const greeter = require('./greeter.js')({
    defaultName: config.defaultName,
  });

  const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // parse name out of the URL query part like /?name=Bob
    const data = qs.parse(URL.parse(request.url).query);
    response.end(JSON.stringify(greeter.sayHello(data.name)));
  });

  server.start = () => {
    server.listen(port, '0.0.0.0', () => {
      console.log('Server running at %j', server.address());
    });
  };
  return server;
};
