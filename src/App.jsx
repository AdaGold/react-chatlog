import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messageData from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(messageData);
  const [likedCount, setLikedCount] = useState(0);

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

  return (
    <div id="App">
      <header>
        <h1>Chat between {participantList[0]} and {participantList[1]}</h1>
        <section>
          <p className='widget' id='heartWidget'>{likedCount} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} onMessageLiked={toggleLikedMessage} />
      </main>
    </div>
  );
};

export default App;
