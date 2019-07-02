import React from 'react';
import WebSocket from 'socket.io-client';

const sendMessage = async () => {
  const socket = WebSocket('localhost:8888');
  await socket.emit('SEND_MESSAGE', 'DATA');
  socket.on('RECEIVE_MESSAGE', (data: any) => {
    console.log(`data: ${data}`);
  });
};

export class Root extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    );
  }
}
