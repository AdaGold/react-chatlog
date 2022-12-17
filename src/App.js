import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

function App() {
  const [entryData, setEntryData] = useState(chatMessages);

  const likeMessage = (id) => {
    setEntryData((entryData) =>
      entryData.map((entry) => {
        if (entry.id === id) {
          return { ...entry, likeCount: entry.likeCount + 1 };
          // return { ...entry, likeEntry: !entry.likeEntry };
        } else {
          return entry;
        }
      })
    );
  };

  const calcTotalLikes = (entryData) => {
    return entryData.reduce((total, entry) => {
      return total + entry.likeCount;
    }, 0);
  };

  const totalLikesTally = calcTotalLikes(entryData);

  return (
    <div className="App">
      <header>
        <h1>Application title</h1>
      </header>
      <h2> {totalLikesTally}</h2>
      <main>
        <ChatLog entries={chatMessages} onLikeMessage={likeMessage} />
      </main>
    </div>
  );
}

export default App;
