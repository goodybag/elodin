global.Handlebars = require('handlebars');

require('./handlebars-helpers').register(global.Handlebars);

require('./product');

module.exports = Handlebars.templates;
