import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const newChatMessages = chatMessages.map((chat) => {
    return { ...chat };
  });
  const [chats, setChats] = useState(newChatMessages);
  const changeLike = (id) => {
    const arr = [];
    for (const chat of chats) {
      if (id !== chat.id) {
        arr.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        arr.push(newChat);
      }
    }
    setChats(arr);
  };

  const likeCount = () => {
    let numLikes = 0;
    for (const chat of chats) {
      if (chat.liked === true) {
        numLikes += 1;
      }
    }
    return numLikes;
  };
  return (
    <div id="App">
      <header>
        <h1>chats</h1>
        <h3> {likeCount()} ❤️s</h3>
      </header>
      <main>
        <ChatLog
          entries={chats}
          changeLike={changeLike}
          // numLikes={likeCount()}
        />
      </main>
    </div>
  );
};

export default App;
