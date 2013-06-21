var express = require('express');
var logger  = require('winston');

var app = express();



exports.start = function(port) {
  app.listen(port);
  logger.info('listening on port: ' + port);
};
