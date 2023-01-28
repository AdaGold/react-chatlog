import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const chatDatas = chatMessages;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>{<ChatLog entries={chatDatas} />}</main>
    </div>
  );
};

export default App;
