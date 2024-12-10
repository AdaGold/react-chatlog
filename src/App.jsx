import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          key={messages[0].id}
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
