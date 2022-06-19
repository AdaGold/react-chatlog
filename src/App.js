import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';


const App = () => {
  // console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Chat with {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
      </header>
      <main>
      <ChatEntry
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        />
        <span>
          <ChatLog entries={chatMessages}/>
        </span>

        {/* /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */ }
      </main>
    </div>
  );
};

export default App;
