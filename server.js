var express = require('express');


var app = express();

exports.start = function(port) {
  app.listen(port);
  console.log('listening on port:', port);
};
