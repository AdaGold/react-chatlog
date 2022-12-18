import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState(chatMessages);

  const likeMessage = (id) => {
    setEntries((entries) =>
      entries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            liked: !entry.liked,
            likeCount: entry.likeCount + 1,
          };
        } else {
          return entry;
        }
      })
    );
  };

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.likeCount;
    }, 0);
  };

  const totalLikeCount = calcTotalLikes(entries);

  return (
    <div className="App">
      <h2>Number of Likes: {totalLikeCount}</h2>
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={entries} onLikeMessage={likeMessage} />
      </main>
    </div>
  );
}

export default App;
