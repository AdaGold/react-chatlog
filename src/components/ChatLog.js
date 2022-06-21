import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import chatData from '../data/messages.js';
// import messagesArray from '../data/messages.js';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    // debugger;
    return (
      <ul>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </ul>
    );
  });
  return <div className="chat-log">{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

export default ChatLog;
