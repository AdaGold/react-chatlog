import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import React, { useState } from 'react';

const App = () => {
  const [chatsData, setChatsData] = useState(chatMessages);

  const updateChatsData = (updateChat) => {
    const chats = chatsData.map((chat) => {
      if (chat.id === updateChat.id) {
        return updateChat;
      } else {
        return chat;
      }
    });
    setChatsData(chats);
  };

  const heartCounts = chatsData.filter((chat) => chat.liked === true);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <p>{heartCounts.length} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog entries={chatsData} updateChatsData={updateChatsData} />
      </main>
    </div>
  );
};

export default App;
