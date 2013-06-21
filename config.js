var logger = require('winston');

var configs = {
  dev: {
    port: 8081
  },

  prod: {
    port: 80
  }
};

var environment = require('./environment');

logger.info('using config: ' + environment.mode);

module.exports = configs[environment.mode];
