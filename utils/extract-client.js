module.exports = function(req) {
  var software = req.headers["user-agent"];
  software = software.slice(software.indexOf("(") + 1, software.indexOf(")"));

  var language = req.headers["accept-language"];
  language = language.slice(0, language.indexOf(","));

  return {
    ipaddress: req.connection.remoteAddress,
    language: language,
    software: software
  };
};