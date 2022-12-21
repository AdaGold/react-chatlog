import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messagesList, setMessageList] = useState(chatMessages);

  const updateMessages = (id) => {
    const newMessageList = messagesList.map((message) => {
      if (id === message.id) {
        message.liked = !message.liked;
        return message;
      } else {
        return message;
      }
    });

    setMessageList(newMessageList);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesList} onLikeClick={updateMessages} />
      </main>
    </div>
  );
};

export default App;
