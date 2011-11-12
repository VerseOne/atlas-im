var pool = Object.create(null)
  , clientMap = Object.create(null)
  , util = require('util');
  
pool.connect = function (socket) {
  
  socket.emit("message", "new client connection"); 
  
  socket.on('userid', pool.setUpUser);
  
};

pool.setUpUser = function (oUsr) {
  
  util.log(util.inspect(oUsr));
  
} 

module.exports = pool;