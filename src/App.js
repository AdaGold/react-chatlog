import React from 'react';
import ChatLog from './components/ChatLog';
import './App.css';
import chatMessages from './data/messages.json';

// Return an array of each participant in the chat
const participants = () => {
  const senders = chatMessages.map(msg => msg.sender);
  const uniqueSenders = new Set(senders);

  return [...uniqueSenders];
}

const appTitle = () => {
  const [first, second] = participants();

  return `Chat between ${first} and ${second}`;
}

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>{appTitle()}</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
}

export default App;
