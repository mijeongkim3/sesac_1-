const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//클라이언트 소켓이 연결되면 콜백 함수가 실행된다
//socket:클라이언트 소켓과 연결되고 새로 생성된 소켓.
io.on('connection', (socket)=> {
  
  console.log('Server Socket Connected', socket.id );
  
  socket.emit('welcome',{msg: 'welcome'});
  
  socket.on('response', (str) => {
      console.log(str);      // socket.emit('response', 'hello')을 받는거 .
  })

  socket.on('disconnect', ()=> {
    console.group('Server Socket disconnected');
  })

});

http.listen(8000, () => {
  console.log('Server port :', 8000);
});
