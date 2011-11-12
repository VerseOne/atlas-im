var http = require('http')
  , io = require('socket.io')
  , router = require('./lib/router')
  , server = http.createServer(router.route)
  , util = require('util');
  
io = io.listen(server);
server.listen(8080);

io.sockets.on('connection', function (socket) {
  
  socket.emit("message", {fuck: 'you'});
  
});


