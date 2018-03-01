module.exports = function(req) {
  var software = req.headers["user-agent"];
  var language = req.headers["accept-language"];
  var ip = req.headers["x-forwarded-for"];

  software = software.slice(software.indexOf("(") + 1, software.indexOf(")"));
  language = language.slice(0, language.indexOf(","));

  if(ip) {
    ip = ip.split(",").pop();
  } else {
    ip = req.connection.remoteAddress;
    ip = ip.slice(ip.lastIndexOf(":") + 1);
  }
  
  return {
    ipaddress: ip,
    language: language,
    software: software
  };
};