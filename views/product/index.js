(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['product'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <!-- Twitter Card Integration -->\n      <meta name=\"twitter:card\" content=\"product\">\n      <meta name=\"twitter:site\" content=\"@goodybagATX\">\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.business)),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      <meta name=\"twitter:title\"        content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <meta name=\"twitter:description\"  content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <meta name=\"twitter:image\"        content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filepicker || depth0.filepicker),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.width), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "filepicker", ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.width), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.height), options)))
    + "\">\n      <meta name=\"twitter:image:width\"  content=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <meta name=\"twitter:image:height\" content=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <meta name=\"twitter:label1\"       content=\"Business\">\n      <meta name=\"twitter:data1\"        content=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.business)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <meta name=\"twitter:creator\" content=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.business)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        <meta name=\"twitter:label2\"       content=\"Price\">\n        <meta name=\"twitter:data2\"        content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.price || depth0.price),stack1 ? stack1.call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), options) : helperMissing.call(depth0, "price", ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), options)))
    + "\">\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n            <div class=\"span6\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.price || depth0.price),stack1 ? stack1.call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), options) : helperMissing.call(depth0, "price", ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), options)))
    + "</div>\n          ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "6";
  }

function program10(depth0,data) {
  
  
  return "12";
  }

  buffer += "<!doctype html>\n<html xmlns:fb=\"http://ogp.me/ns/fb#\">\n  <head>\n    <link href=\"/bootstrap.min.css\" rel=\"stylesheet\">\n    <link href=\"/goodybag.css\" rel=\"stylesheet\">\n    <link href=\"/main.css\" rel=\"stylesheet\">\n\n    <title>"
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</title>\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      <meta property=\"og:image\" content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filepicker || depth0.filepicker),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.width), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "filepicker", ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.width), ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.height), options)))
    + "\" />\n    <script>\n      window.location.href = \"http://www.goodybag.com/#/products/"
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\";\n    </script>\n  </head>\n  <body>\n    <div id=\"app-header\" class=\"header-navbar\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"span2 logo-wrapper\">\n            <img src=\"/logo.png\" alt=\"\" class=\"logo\">\n          </div>\n\n          <div class=\"span6 nav-wrapper\">\n            <ul class=\"nav\">\n              <li><a href=\"//goodybag.com/#/explore\">Explore</a></li>\n              <li><a href=\"//goodybag.com///goodybag.com/#/collections\">My Collections</a></li>\n              <li class=\"dropdown dropdown-more\">\n                <a href=\"#/more\" class=\"more\">More</a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"//goodybag.com/#/how-it-works\">How it Works</a></li>\n                  <li><a href=\"//goodybag.com/#/locations\">Locations</a></li>\n                  <li><a href=\"//goodybag.com/#/about-us\">About Us</a></li>\n                  <li><a href=\"//goodybag.com/#/charities\">Charities</a></li>\n                  <li><a href=\"//goodybag.com/#/gb-for-businesses\">Contact Us</a></li>\n                  <li><a href=\"//goodybag.com/#/privacy\">Privacy</a></li>\n                  <li><a href=\"//goodybag.com/#/legal\">Legal</a></li>\n                  <li><a href=\"//goodybag.com/#/support\">Support</a></li>\n                  <li class=\"get-the-app\">\n                    <a href=\"https://itunes.apple.com/ie/app/goodybag/id506924389?mt=8\">Get the App!</a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"main\" class=\"container plateau\">\n      <div style=\"clear: both;\"></div>\n      <div class=\"span5 centered-container\">\n        <div class=\"row-fluid\">\n          <h1 class=\"span12 product-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        </div>\n        <div class=\"row-fluid\">\n          <h4 class=\"span12 business-name\">@ "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.business)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n        </div>\n        <div id=\"main-image-wrapper\" class=\"row-fluid\">\n          <img id=\"main-image\" class=\"span12\" src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.filepicker || depth0.filepicker),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), 570, 570, options) : helperMissing.call(depth0, "filepicker", ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.image)),stack1 == null || stack1 === false ? stack1 : stack1.url), 570, 570, options)))
    + "\" height=\"570\" width=\"570\">\n        </div>\n        <div class=\"row-fluid\">\n          <p class=\"span12 product-description\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        </div>\n        <div class=\"row-fluid info-row\">\n          ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            <div class=\"span";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.cents), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n              <img src=\"/heart_icon.png\" height=\"16\" width=\"16\"> "
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.likes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </div>\n        </div>\n      </div>\n    </div>\n    <script src=\"//use.typekit.net/vhr1yyf.js\"></script>\n    <script>\n      // Don't really need any jquery yet\n      document.getElementById('main').onclick = function(e) {\n        window.location.href = 'http://www.goodybag.com/#/businesses/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.business)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "';\n      }\n      try{Typekit.load();}catch(e){}\n    </script>\n  </body>\n</html>\n";
  return buffer;
  });
})();