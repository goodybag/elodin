var logger = require('winston');

var configs = {
  dev: {
    port: 8081,
    apiRoot: 'http://localhost:8080',
    apiVersion: 'v1'
  },

  prod: {
    port: 80,
    apiRoot: 'https://magic.goodybag.com',
    apiVersion: 'v1'
  }
};

var environment = require('./environment');

logger.info('using config: ' + environment.mode);

module.exports = configs[environment.mode];
