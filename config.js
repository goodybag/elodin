var logger = require('winston');

var configs = {
  dev: {
    port: 8081,
    apiRoot: 'http://localhost:3000',
    apiVersion: 'v1',
    fb: {
      appId: '511559232240117'
    }
  },

  prod: {
    port: process.env.PORT || 80,
    apiRoot: 'http://magic.goodybag.com',
    apiVersion: 'v1',
    fb: {
      appId: '511559232240117'
    }
  }
};

var environment = require('./environment');

logger.info('using config: ' + (process.env.GB_ELODIN_ENV || environment.mode));

module.exports = configs[process.env.GB_ELODIN_ENV || environment.mode];
