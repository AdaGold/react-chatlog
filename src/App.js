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
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  return (
    <div className="App">
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
