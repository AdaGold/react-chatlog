import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
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
      </header>
      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
