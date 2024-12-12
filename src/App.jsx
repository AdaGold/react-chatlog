import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(messageData);
  const [likedCount, setLikedCount] = useState(0);
  const [remoteColor, setRemoteColor] = useState();
  const [localColor, setLocalColor] = useState();

  const toggleLikedMessage = (messageId) => {
    const updatedMessages = messages.map((message) => {
      return message.id === messageId
        ? { ...message, liked: !message.liked }
        : message;
    });

    const likedList = updatedMessages.filter((message) => message.liked);

    setLikedCount(likedList.length);
    setMessages(updatedMessages);
  };

  const participantList = [];
  messages.forEach((message) => {
    if (!participantList.includes(message.sender)) {
      participantList.push(message.sender);
    }
  });

  const colorBtns = (senderLocation) => {
    const colors = [
      { '🔴': 'red' },
      { '🟠': 'orange' },
      { '🟡': 'yellow' },
      { '🟢': 'green' },
      { '🔵': 'blue' },
      { '🟣': 'purple' }
    ];
    return colors.map((color, index) => {
      return Object.entries(color).map(([colorIcon, colorName]) => {
        return (
          <button
            key={index}
            onClick={() => {
              senderLocation === 'local' ? setLocalColor(colorName) : setRemoteColor(colorName);
            }}
            className='widget'>{colorIcon}
          </button>
        );
      });
    });
  };

  return (
    <div id="App">
      <header>
        <span>
          <h1>Chat between </h1>{' '}
          <h1 className={localColor}>{participantList[0]}</h1>{' '}
          <h1>and</h1>{' '}
          <h1 className={remoteColor}>{participantList[1]}</h1>
        </span>
        <section>
          <span className='widget'>
            <h3 className={localColor}>{participantList[0]}&apos;s color:</h3>
            {colorBtns('local')}
          </span>
          <p className='widget' id='heartWidget'>{likedCount} ❤️s</p>
          <span className='widget'>
            <h3 className={remoteColor}>{participantList[1]}&apos;s color:</h3>
            {colorBtns('remote')}
          </span>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messages}
          onMessageLiked={toggleLikedMessage}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
