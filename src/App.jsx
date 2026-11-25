import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesData}/>

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
