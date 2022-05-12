import React from "react";
import "./ChatEntry.css";
import PropTypes from "prop-types";
import Timestamp from "./TimeStamp";

const ChatEntry = (props) => {
  let senderClass = "chat-entry local";

  return (
    <div className={senderClass}>
      <h2 className="entry-name">Replace with name of sender</h2>
      <section className="entry-bubble">
        <p>Replace with body of ChatEntry</p>
        <p className="entry-time">Replace with TimeStamp component</p>
        <button onClick={props.onClickCallback} className="like">
          🤍❤️
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
