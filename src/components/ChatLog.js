import React from 'react';
import './ChatEntry.css';
import './ChatLog.css';

import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLike }) => {
  const messages = entries.map((message) => {
    return (
      <div>
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          updateLike={updateLike}
        />
      </div>
    );
  });

  return <section className="chat-log">{messages}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  updateLike: PropTypes.func,
};

export default ChatLog;
