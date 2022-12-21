import React from 'react';
import useState from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

// const messages = [...chatMessages];

const App = () => {
  // const [messageData, setMessageData] = useState[messages];
  console.log(chatMessages);

  const messages = chatMessages.map((message, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          like={message.like}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry message={messageData}></ChatEntry> */}
        <ChatEntry />
        {messages}
      </main>
    </div>
  );
};

export default App;
