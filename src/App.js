import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);


  // event handler to increment likeCount
  const increaseLike = (id) => {
    console.log(`Liked message ${id}`)
    console.log(likeCount)
    setChatData(chatData => chatData.map(entry => {
      if (entry.id === id) {
        console.log(entry.likeCount);
        return {...entry, likeCount: entry.likeCount + 1}
        console.log(likeCount);
      } else {
        return entry;
      }
    }));

    
  } 
    
  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      if (entry.liked) {
        total += 1
      }
      return total;
    }, 0)
    // console.log(likeCount);
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
        <div>Likes: {totalLikeTally}</div>
      </header>
      <main>
        <div>
          <ChatLog 
          entries={chatData}
          onIncreaseLike={increaseLike}
          onUpdateChatData={updateChatData}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
