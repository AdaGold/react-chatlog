import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender="Joe Biden"
          body="Get out by 8am.  I'll count the silverware"
          timeStamp="2018-05-18T22:12:03Z"
        />
      </main>
    </div>
  );
};

export default App;
