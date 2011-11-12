var io = require('socket.io')
  , pool = require('./lib/pool')
  , util = require('util');
  
io = io.listen(8080);

io.sockets.on('connection', pool.connect);


