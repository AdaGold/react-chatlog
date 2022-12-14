import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
// import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry
          id="1"
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
          liked="false"
        />
      </main>
    </div>
  );
};

export default App;
