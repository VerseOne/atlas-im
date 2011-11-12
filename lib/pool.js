var pool = Object.create(null);
  
pool.connect = function (socket) {
  
  socket.emit("message", "new client connection"); 
  
};

module.exports = pool;