module.exports = function(req) {
  var software = req.headers["user-agent"];
  software = software.slice(software.indexOf("(") + 1, software.indexOf(")"));

  var language = req.headers["accept-language"];
  language = language.slice(0, language.indexOf(","));

  var ip = req.connection.remoteAddress;
  ip = ip.slice(ip.lastIndexOf(":") + 1);

  return {
    ipaddress: ip,
    language: language,
    software: software
  };
};