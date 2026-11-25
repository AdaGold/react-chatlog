import './App.css';
import ChatEntry from './components/ChatEntry';
import messagesData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={messagesData[0].sender}
          body={messagesData[0].body}
          timeStamp={messagesData[0].timeStamp}/>
        {/* <ChatEntry messages={messagesData}/> */}

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
