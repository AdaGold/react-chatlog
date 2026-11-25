import { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(messagesData);
  const likedCount = entries.filter(entry => entry.liked === true).length;


  const likeMessage = (id) => {
    setEntries((entries) =>
      entries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      ));
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p className='likedCount'>{likedCount} ❤️s</p>
        <ChatLog entries={entries} isLiked={likeMessage} />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
