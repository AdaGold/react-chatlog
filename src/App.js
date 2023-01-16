import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState(chatMessages);

  const likeMessage = (id) => {
    setEntries((entries) => {
      return entries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            liked: !entry.liked,
          };
        } else {
          return entry;
        }
      });
    });
  };

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalLikeCount = calcTotalLikes(entries);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div>{totalLikeCount} ❤️s</div>
        <ChatLog entries={entries} onLikeMessage={likeMessage} />
      </main>
    </div>
  );
}

export default App;
