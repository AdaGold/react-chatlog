import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import {useState} from 'react';
import ChatLog from './components/ChatLog'


const chatDataList = chatMessages

const App = () => {
  const [chatData, setChatData] = useState(chatDataList);

  const toggleHeart = (id) => {
    setChatData(chatData => chatData.map(message => {
      if(message.id === id) {
        return {...message, liked: !message.liked}
      } else {
        return message;
      }
    }));
  }

  const calcHearts = (chatData) => {
    return chatData.reduce((total, message) => {
      return total + message.liked;
    }, 0)
  };

  const totalHearts = calcHearts(chatData);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h1>My Chat Log</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <h2>{totalHearts} ❤️s</h2>
        <ChatLog entries={chatData} onToggleHeart ={toggleHeart}/>
      </main>
    </div>
  );
};

export default App;