import React from "react";
import PropTypes from "prop-types";
import ChatEntry from "./ChatEntry";
import "./ChatLog.css";

const ChatLog = ({ entries, updateLikes }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          updateLikes={updateLikes}
        />
      ))}
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
