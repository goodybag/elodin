var https   = require('https');
var logger  = require('winston');
var request = require('request');

var config  = require('../config');
var view    = require('../views').product;

var getProduct = module.exports.getProduct = function(req, res, next) {
  var pid = req.params.productId;

  var path = '/' + config.apiVersion + '/products/' + pid;

  request.get(config.apiRoot + path, function(err, response, body) {
    if (err) return res.json(500, err);
    if (response.statusCode !== 200) res.send(response.statusCode, body); //TODO: better

    res.send(view(body));
  });
};
