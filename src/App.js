import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import entriesJson from './data/messages.json';

const App = () => {


  const [entries, setEntries] = useState(entriesJson);

  // const [chatData, setChatData] = useState(chatDataJson);
  // // debugger;

  // console.log(chatMessage);
  return (
    <div id="App">
      <header>
        <h1>Message History</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
      </main>
    </div>
  );
};

export default App;
