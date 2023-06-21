import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';



//use state
// create func to update likes
//creat func to count likes 


const App = () => {

  const [entries, setEntries] = useState(chatMessages);
  
  const updateLike = (entryId) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === entryId) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });

    setEntries(updatedEntries);
  }
    const newLikedCount = entries.filter(
      (entry) => entry.liked === true).length;


  return (
    <div id="App">
      <header>
        <h1> Mikayla's Application</h1>
          <h2>{newLikedCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries}
        updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;


