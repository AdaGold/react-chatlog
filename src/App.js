import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messagesInfo, setMessagesInfo] = useState(chatMessages);
 


  const updateMessageData = (updatedMessage) => {
    const messages = messagesInfo.map((message) =>
      message.id === updatedMessage.id ? updatedMessage : message
    )

    setMessagesInfo(messages);
  };

  // const updateMessageData = (updatedMessage) => {
  //   const messages = messagesInfo.map((message) => {
  //     if (message.id === updatedMessage.id) {
  //       return updatedMessage;
  //     } else {
  //       return message;
  //     }
  //   });

  //   setMessagesInfo(messages);



  // };
  const countHeart = () => messagesInfo.filter((message) => (message.liked === true)).length

  const localUser = chatMessages[0].sender;
  let remoteUser;
  for (const chat of chatMessages) {
    if (chat.sender !== localUser) {
      remoteUser = chat.sender;
      break;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <p id="numHeart">{countHeart()} ❤️s</p>
      <main>
        <ChatLog


          updateMessageData={updateMessageData}
          entries={messagesInfo}
          localUser={localUser}
          remoteUser={remoteUser}

        />
      </main>
    </div>
  );
};

export default App;
