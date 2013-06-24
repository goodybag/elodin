module.exports.register = function(Handlebars) {
  Handlebars.registerHelper('filepicker', function(url, width, height){
    if (typeof url !== 'string') return null;
    var result = url.replace('www', 'cdn');

    if (result.indexOf('convert') === -1)
      result += "/convert?cache=true&fit=crop"

    result += "&w=" + (width   || 100);
    result += "&h=" + (height  || 100);

    return result;
  });

  Handlebars.registerHelper('price', function(cents) {
    if (typeof cents !== 'number') return null;
    return '$' + Math.round(cents) / 100;
  });
};
