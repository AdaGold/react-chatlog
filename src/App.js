import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const INITIALCOPY = chatMessages.map((message) => {
    return { ...message };
  });

  const [chatData, setChatData] = useState(INITIALCOPY);

  const [likedCount, setLikedCount] = useState(0);

  const heartWidget = likedCount !== 0 ? `${likedCount} ❤️s` : '';

  const updateLike = (chatEntryId, updatedLike) => {
    let newLikeCount = likedCount;
    const newChatData = chatData.map((chatEntry) => {
      if (chatEntry.id !== chatEntryId) {
        return chatEntry;
      } else {
        if (updatedLike) {
          newLikeCount++;
        } else {
          newLikeCount--;
        }
        const newChat = {
          ...chatEntry,
          liked: updatedLike,
        };
        return newChat;
      }
    });
    setChatData(newChatData);
    setLikedCount(newLikeCount);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span className="widget" id="heartWidget">
            {heartWidget}
          </span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
