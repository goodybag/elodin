var configs = {
  dev: {
    port: 8081
  },

  prod: {
    port: 80
  }
};

var environment = require('./environment');

console.log('mode:', environment.mode);
console.log('config:', configs[environment.mode]);

module.exports = configs[environment.mode];
