import React from "react";
import "./App.css";
import ChatEntry from "./components/ChatEntry";
import chatMessages from "./data/messages.json";

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry></ChatEntry>
      </main>
    </div>
  );
};

export default App;
