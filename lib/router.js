var EventEmitter = require('events').EventEmitter
  , url = require('url')
  , util = require('util');

var router = new EventEmitter
  , routeTable = {};

router.route = function (req, res) {
  
  var headers = req.headers;
  util.log(headers.host.replace(/\:.*$/, ''));
  
  res.writeHead(200, "OK");
  res.end("suck my balls");
  
};

module.exports = router;
