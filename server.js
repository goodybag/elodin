var express = require('express');
var logger  = require('winston');

var controllers = require('./controllers');

var app = express();

app.get('/products/:productId', controllers.products.getProduct);

exports.start = function(port) {
  app.listen(port);
  logger.info('listening on port: ' + port);
};
