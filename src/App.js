import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
  import Chatlog from './components/Chatlog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <Chatlog messages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
