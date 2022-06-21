import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import entriesJson from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(entriesJson);

  const likeMessage = (id) => {
    console.log(`liked! message ${id}`);
    const newEntry = entries.map((entry) => {
      // what we want to modify when we click !
      if (entry.id === id) {
        // entry.liked = true;
        // console.log(entry);
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setEntries(newEntry);
  };

  const unlikeMessage = (id) => {
    console.log(`unregister ${id}`);
  };

  const totalLikes = entries.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }return total;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Message History</h1>
        <h2>Total Likes: {totalLikes} </h2>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onLikeMessage={likeMessage}
          onUnlikeMessage={unlikeMessage}
        />
      </main>
    </div>
  );
};

export default App;
