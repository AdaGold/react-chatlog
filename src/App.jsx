import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(messagesData);
  const likedCount = entries.filter(entry => entry.liked === true).length;
  const senders = [...new Set(entries.map(entry => entry.sender))];
  const localSender = senders[0];
  const likeMessage = (id) => {
    setEntries((entries) =>
      entries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      ));
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between <span className='green'>{senders[0]}</span> and <span className='blue'>{senders[1]}</span></h1>
        <section>
          <h2 className='likedCount'>{likedCount} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} localSender={localSender} isLiked={likeMessage} />
      </main>
    </div>
  );
};

export default App;
