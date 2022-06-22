import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';




const App = () => {
  //state
  const [messageData, setMessageData] = useState(chatMessages);
  let [totalLikes, setTotalLikes] = useState(0);

  const updateMessageData = (updatedMessage) => {
    const messages = messageData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
    // console.log(messages);
  };

  const updateTotalLikes = (bool) => {
    bool ? setTotalLikes((totalLikes += 1)) : setTotalLikes((totalLikes -= 1));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat with {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <h2>{totalLikes > 0 && `${totalLikes} ❤️s`}</h2>
      </header>
      <main>
        

        <ChatLog
          entries={messageData}
          updateMessageData={updateMessageData}
          totalLikes={totalLikes}
          setTotalLikes={setTotalLikes}
          updateTotalLikes={updateTotalLikes}
        />
      </main>
    </div>
  );
};

export default App;