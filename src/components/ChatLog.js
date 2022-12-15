import React from 'react';
import './ChatEntry.css';
import './ChatLog.css';

import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;

  const messages = entries.map((message) => {
    return (
      <div>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </div>
    );
  });

  return <section className="chat-log">{messages}</section>;
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
