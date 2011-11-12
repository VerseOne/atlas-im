(function ($) {
  
  var socket = io.connect("ws://localhost:8080");
  
  socket.on('connect', function () {
    
    socket.emit('userid', {userid: +new Date}); // get from logged in user
    
  });

  socket.on('message', function (msg) {
    
    console.log(msg);
    
  });
  
})(jQuery);

