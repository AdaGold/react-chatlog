import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  // const [likeCount, setLikeCount] = useState(0);


  // event handler to increment likeCount
  // const likeChatEntry = (id) => {
  //   console.log(`Liked message ${id}`)
  //   const newChatData = chatData.map(entry => {
  //     if (entry.id === id) {
  //       return {...entry, likeCount: entry.liked + 1}
  //     } else {
  //       return entry;
  //     }
  //   });
  //   // setLikeCount()
  //   setChatData(newChatData);
  // }
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
        <h1>Application title</h1>
      </header>
      <main>
        <div>
          <ChatLog 
          entries={chatData}
          // onLikeChatEntry={likeChatEntry}
          onUpdateChatData={updateChatData}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
