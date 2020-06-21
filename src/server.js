import App from './app';

const http = require('http').createServer(App);
const io = require('socket.io')(http);

let data = '';
io.on('connection', (socket) => {
  console.log('Connected 2');
  socket.on('postLive', (a) => {
    data = a;
  });
  setTimeout(() => {
    socket.emit('retornoPostLive', data);
  }, 2000);
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

http.listen(3333);
