import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messagesList, setMessageList] = useState(chatMessages);
  const [likesCounter, setLikesCounter] = useState(0);

  const countLikes = () => {
    let likeCounter = 0;

    for (const message of messagesList) {
      if (message.liked === true) {
        likeCounter += 1;
      }
    }
    return likeCounter;
  };

  const updateMessages = (id) => {
    const newMessageList = messagesList.map((message) => {
      if (id === message.id) {
        message.liked = !message.liked;
        return message;
      } else {
        return message;
      }
    });

    setLikesCounter(countLikes());
    setMessageList(newMessageList);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section id="heartWidget">{likesCounter} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={messagesList} onLikeClick={updateMessages} />
      </main>
    </div>
  );
};

export default App;
