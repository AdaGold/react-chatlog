import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const initialCopy = chatMessages.map((chatentry) => {
    return { ...chatentry };
  });

  const [chatData, setChatData] = useState(initialCopy);

  const updateLikes = (chatentryId) => {
    console.log('updateLikes called');
    const newChatEntries = [];

    for (const chat of chatData) {
      if (chat.id !== chatentryId) {
        newChatEntries.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        newChatEntries.push(newChat);
      }
      setChatData(newChatEntries);
    }
  };
  const countLikes = () => {
    return chatData.reduce((accumulator, count) => {
      return count.liked ? accumulator + 1 : accumulator;
    }, 0);
  };
  return (
    <div id="App">
      <header>
        <h1>🤖 bot v bot chat 💬</h1>
        <h2>{countLikes()} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
