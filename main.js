var config = require('./config');
var server = require('./server');

server.start(config.port);
