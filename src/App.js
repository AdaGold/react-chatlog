import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const initialCopy = chatMessages.map((chat) => {
    return { ...chat };
  });

  const [chatLog, setChatLog] = useState(initialCopy);

  const updateLike = (messageId, likedStatus) => {
    const newMessageList = [];
    for (const message of chatLog) {
      if (message.id !== messageId) {
        newMessageList.push(message);
      } else {
        const newMessage = {
          ...message,
          liked: likedStatus,
        };
        newMessageList.push(newMessage);
        console.log(likedStatus);
      }
    }
    setChatLog(newMessageList);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog updateLike={updateLike} entries={chatLog} />
      </main>
    </div>
  );
};

export default App;
