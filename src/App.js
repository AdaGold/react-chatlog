import React, { useState } from "react";
import "./App.css";
import chatMessages from "./data/messages.json";
import ChatLog from "./components/ChatLog";
import ColorChoice from "./components/ColorChoice";

const App = () => {
  //console.log(chatMessages);

  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("black");
  const [entries, setEntries] = useState(chatMessages);

  const calculateHearts = () => {
    let total = 0;
    for (let entry of chatMessages) {
      if (entry.heart === true) {
        total += 1;
      }
    }
    return total;
  };

  const updateHeart = (id) => {
    console.log("update heart", id);
    const entriesCopy = [...entries];
    for (let entry of entriesCopy) {
      if (entry.id === id) {
        entry.heart = !entry.heart;
      }
    }
    setEntries(entriesCopy);
  };

  const setSenderColor1 = (newColor) => {
    console.log("set sender color 1");
    setColor1(newColor);
  };

  const setSenderColor2 = (newColor) => {
    console.log("set sender color 2");
    setColor2(newColor);
  };
  return (
    <div id="App">
      <header>
        <h1>
          <span>
            <ColorChoice setColorCallback={setSenderColor1} />
          </span>
          <span>
            Chat between{" "}
            <span id="sender1" className={color1}>
              {chatMessages[0].sender}
            </span>{" "}
            and{" "}
            <span id="sender2" className={color2}>
              {chatMessages[1].sender}
            </span>
          </span>
          <span>
            <ColorChoice setColorCallback={setSenderColor2} />
          </span>
        </h1>

        <h2>
          {calculateHearts()}{" "}
          <span role="img" aria-label="filled red heart">
            ❤️
          </span>
          s
        </h2>
      </header>

      <main>
        <ChatLog
          entries={entries}
          color1={color1}
          color2={color2}
          updateHeartCallback={updateHeart}
        />
      </main>
    </div>
  );
};

export default App;
