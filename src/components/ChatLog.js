import React from "react";
import ChatEntry from "./ChatEntry";

const ChatLog = (props) => {
  const entries = props.entries;

  const entryComponents = entries.map((entry, i) => {
    return (
      <div className="chat-log" key={i}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          odd={i % 2}
          color1={props.color1}
          color2={props.color2}
          id={entry.id}
          heart={entry.heart}
          updateHeartCallback={props.updateHeartCallback}
        />
      </div>
    );
  });

  return entryComponents;
};

export default ChatLog;
