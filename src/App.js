import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div>
          <ChatLog entries={chatData} />
        </div>
      </main>
    </div>
  );
};

export default App;
