import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
  import Chatlog from './components/Chatlog';
  
const App = () => {
  const [entries, setEntries] = React.useState(chatMessages);
  
  const changeLiked = (id) => {
    setEntries(prevEntries => {
      const updatedEntries = prevEntries.map(entry => {
        
          return entry.id === id ? { ...entry, liked: !entry.liked} : entry;
        })
        return updatedEntries;
      })
    }

  const totalLiked = () => {
    let total = 0;
    for (let entry of entries) {
      total += entry.liked ? 1 : 0;
    }
    return total;
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>{totalLiked()} ❤️s</p>
        <Chatlog entries={entries} changeLiked ={changeLiked}/>
      </main>
    </div>
  );
};

// const Chatlog = ({ entries }) => {
// const [entries] = React.useState     (chatMessages);

export default App;
