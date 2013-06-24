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

    var product = JSON.parse(body).data;

    var data = {
      fb: config.fb,
      product: {
        name: product.name || "",
        description: product.description || "",
        business: {
          id: product.businessId,
          name: product.businessName,
          twitter: product.businessTwitter
        },
        image: {
          url: product.photoUrl,
          width: 320,
          height: 320
        },
        cents: product.price,
        likes: product.likes
      }
    };

    // logger.info('rendering product with data: ' + JSON.stringify(data));

    res.send(view(data));
  });
};
