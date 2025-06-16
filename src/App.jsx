import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog.jsx';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const likedCount = entries.filter(entry => entry.liked).length;


  return (
    <div id="App">
      <header>
        <h1>React ChatLog</h1>
        <section className="widget" id="heartWidget">
          {likedCount} ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={entries} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
