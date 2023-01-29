import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  // const [entries, setEntries] = useState(chatMessages);
  // const updateChatDatas = (updateEntrie) => {
  //   const chatDatas = entries.map((data) => {
  //     if (data.id === updateEntrie.id) {
  //       return updateEntrie;
  //     }else{
  //       return data;
  //     }
  //   });
  //   setEntries(chatDatas);
  // };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          0 &nbsp; <span>🤍</span>s
        </section>
      </header>
      <main>{<ChatLog entries={chatMessages} />}</main>
    </div>
  );
};

export default App;
