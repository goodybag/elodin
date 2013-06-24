var express = require('express');
var logger  = require('winston');
var static  = require('node-static');

var controllers = require('./controllers');

var app = express();

var fileServer = new static.Server('./public');

app.get('/products/:productId', controllers.products.getProduct);


app.get('/*', function(req, res, next) {
  fileServer.serve(req, res);
});

exports.start = function(port) {
  app.listen(port);
  logger.info('listening on port: ' + port);
};
