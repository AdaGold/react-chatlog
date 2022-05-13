import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [color0, setColor0] = useState('black');
  const [color1, setColor1] = useState('black');
  const [entries, setEntries] = useState(chatMessages);

  const calculateHearts = () => {
    let total = 0;
    for (let entry of chatMessages) {
      if (entry.heart === true) {
        total += 1;
      }
    }
    return total;
  };

  const updateHeart = (id) => {
    const entriesCopy = [...entries];
    for (let entry of entriesCopy) {
      if (entry.id === id) {
        entry.heart = !entry.heart;
      }
    }
    setEntries(entriesCopy);
  };

  const setSenderColor0 = (newColor) => {
    console.log('set sender color 1');
    setColor0(newColor);
  };

  const setSenderColor1 = (newColor) => {
    setColor1(newColor);
  };
  return (
    <div id="App">
      <header>
        <h1>
          Chat between{' '}
          <span id="sender1" className={color0}>
            {chatMessages[0].sender}
          </span>{' '}
          and{' '}
          <span id="sender2" className={color1}>
            {chatMessages[1].sender}
          </span>
        </h1>
        <section>
          <ColorChoice
            setColorCallback={setSenderColor0}
            name={chatMessages[1].sender}
            color={color0}
          />
          <h2 id="heartWidget" className="widget">
            <span role="img" aria-label="filled red heart">
              {calculateHearts()} ❤️s
            </span>
          </h2>
          <ColorChoice
            setColorCallback={setSenderColor1}
            name={chatMessages[1].sender}
            color={color1}
          />
        </section>
      </header>

      <main>
        <ChatLog
          entries={entries}
          color0={color0}
          color1={color1}
          updateHeartCallback={updateHeart}
        />
      </main>
    </div>
  );
};

export default App;
