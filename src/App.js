import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const INITIALCOPY = chatMessages.map((message) => {
    return { ...message };
  });

  const [chatData, setChatData] = useState(INITIALCOPY);

  const updateLike = (chatEntryId, updatedLike) => {
    console.log('updateLike is being called');
    const newChatData = chatData.map((chatEntry) => {
      if (chatEntry.id !== chatEntryId) {
        return chatEntry;
      } else {
        const newChat = {
          ...chatEntry,
          liked: updatedLike,
        };
        return newChat;
      }
    });
    setChatData(newChatData);
  };

  console.log('app loaded successfully');
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
