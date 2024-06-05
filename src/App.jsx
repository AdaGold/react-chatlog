import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatPageHeader from './components/ChatPageHeader';

const App = () => {
  const [color0, setColor0] = useState('black');
  const [color1, setColor1] = useState('black');
  const [entries, setEntries] = useState(chatMessages);

  const calculateHearts = () => {
    const totalLikes = entries.reduce((accumulator, entry) => {
        return accumulator + (entry.liked ? 1 : 0);
      }, 0,
    );

    return totalLikes;
  };

  const updateLiked = (id) => {
    const entriesCopy = [...entries];
    for (let entry of entriesCopy) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
    }
    setEntries(entriesCopy);
  };

  return (
    <div id="App">
      <ChatPageHeader
        color0={color0}
        color1={color1}
        sender0={entries[0].sender}
        sender1={entries[1].sender}
        totalLikes={calculateHearts()}
        setColor0={setColor0}
        setColor1={setColor1}
      />
      <main>
        <ChatLog
          entries={entries}
          color0={color0}
          color1={color1}
          updateLiked={updateLiked}
        />
      </main>
    </div>
  );
};

export default App;