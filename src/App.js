import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const [likes, setLikes] = useState(0);

  const updateLikes = (clicked, setLike) => {
    setLike(!clicked);
    if (!clicked) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => prev - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <p>{likes} ❤️'s</p>
        </section>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
