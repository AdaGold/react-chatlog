import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      if (entry.liked) {
        total += 1
      }
      return total;
    }, 0)
  };

  const totalLikeTally = calcTotalLikes(chatData);

  const updateChatData = (updatedChatData) => {
    const entries = chatData.map(entry => {
      if (entry.id === updatedChatData.id) {
        return updatedChatData
      } else {
        return entry
      };
    });
    setChatData(entries);
  };


  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <div>Likes: {totalLikeTally} ❤️s</div>
      </header>
      <main>
        <div>
          <ChatLog 
          entries={chatData}
          onUpdateChatData={updateChatData}
          />
        </div>
      </main>
    </div>
  );
};

export default App;