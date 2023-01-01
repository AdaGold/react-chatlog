import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedChatData) => {
    setChatData(
      chatData.map((entry) =>
        entry.id === updatedChatData.id ? updatedChatData : entry
      )
    );
  };

  const calcTotalHearts = (chatData) => {
    return chatData.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const likeTotal = calcTotalHearts(chatData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartwidget">
            {likeTotal ? `${likeTotal} ❤️s` : ''}
          </h2>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} updateChatEntry={updateChatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;