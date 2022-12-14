import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between</h1>
      </header>
      <main>
        <ChatEntry
        // sender={chatMessages[0].sender}
        // body={chatMessages[0].body}
        // timeStamp={chatMessages[0].timeStamp}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
