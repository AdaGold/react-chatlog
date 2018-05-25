import React, { Component } from 'react';
import ChatLog from './components/ChatLog';
import './App.css';
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.appTitle()}</h1>
        </header>
        <main className="App-main">
          <ChatLog entries={chatMessages} />
        </main>
      </div>
    );
  }

  appTitle() {
    const [first, second] = this.participants();

    return `Chat between ${first} and ${second}`;
  }

  // Return an array of each participant in the chat
  participants() {
    const senders = chatMessages.map(msg => msg.sender);
    const uniqueSenders = new Set(senders);

    return [...uniqueSenders];
  }
}

export default App;
