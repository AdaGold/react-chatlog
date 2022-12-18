import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>chats</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender="cristal"
          body="hello how are you?"
          timeStamp="2022-12-17T22:49:33+00:00"
        ></ChatEntry>
      </main>
    </div>
  );
};

export default App;
