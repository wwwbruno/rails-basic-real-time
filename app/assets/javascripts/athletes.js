$(function(){
  var socket = io.connect('//localhost:3001/');

  socket.on('message', function (data) {
    data = JSON.parse(data);
    console.log(data);
  });

});