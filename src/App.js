import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  const toggleHeart = (id) =>{
    setChatData(chatData => chatData.map(message =>{
      if (message.id === id) {
        return {...message, liked: !message.liked}
      } else{
        return message;
      }
    }));
  }
  const calcHearts = (chatData) =>{
    return chatData.reduce((total, message) =>{
      return total + message.liked;
    },0)
  };

  const totalHearts = calcHearts(chatData);
  return (
    <div id="App">
      <header>
        <h1>Anna's Chat Log</h1>
        <h2>{totalHearts} ❤️s</h2>
      </header>
      <main>
        
        <ChatLog entries={chatData} onToggleHeart = {toggleHeart}></ChatLog>
      

      </main>
    </div>
  );
};

export default App;
