import React, { useState } from "react";
import "./ChatEntry.css";
import TimeStamp from "./Timestamp";

const ChatEntry = (props) => {
  const [like, setLike] = useState(props.heart);

  const localRemote =
    props.odd === 0 ? "chat-entry local" : "chat-entry remote";

  const color = props.odd === 0 ? props.color1 : props.color2;

  const toggleLike = (id) => {
    console.log(id);
    props.updateHeartCallback(id);
    setLike(!like);
  };

  return (
    <div className={localRemote}>
      <span className="entry-name">{props.sender}</span>
      <div className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={() => toggleLike(props.id)}>
          {like ? <span>❤️</span> : <span>🤍</span>}
        </button>
      </div>
    </div>
  );
};

export default ChatEntry;
