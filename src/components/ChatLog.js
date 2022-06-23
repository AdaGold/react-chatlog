import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    // debugger;
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        liked={entry.liked}
        timeStamp={entry.timeStamp}
        onLikeMessage={props.onLikeMessage}
   
      />
    );
  });
  return <div className="chat-log">{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  onLikeMessage: PropTypes.func.isRequired,
 
};

export default ChatLog;
