import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry'

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
      </header>
      <main>
        <ChatEntry 
        sender={chatMessages[0].sender} 
        body={chatMessages[0].body} 
        timeStamp={chatMessages[0].timeStamp}/>
        <ChatEntry 
        sender={chatMessages[1].sender} 
        body={chatMessages[1].body} 
        timeStamp={chatMessages[1].timeStamp}/>
      </main>
    </div>
  );
};

export default App;
