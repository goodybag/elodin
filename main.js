var config = require('./config');
var server = require('./server');

console.log('starting server with config:', config);

server.start(config.port);
