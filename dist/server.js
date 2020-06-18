"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const http = require('http').Server(_app2.default);
const io = require('socket.io')(http);

const msg = 'mensagem aqui';

// io.on('connection', (socket) => {
//   console.log('Connected');
//   socket.on('my other event', (a) => {
//     console.log(a);
//   });
//   socket.emit('emitindo', msg);
//   socket.on('disconnect', () => {
//     console.log('Disconnected');
//   });
// });

io.on('connection', (socket) => {
  console.log('Connected');

  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});
http.listen(3333);
