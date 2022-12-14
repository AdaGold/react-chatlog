import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp }) => {
  const entrySender = sender;
  const entryBody = body;
  const entryTime = timeStamp;
  const entryRelativeTime = TimeStamp(entryTime);
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{entrySender}</h2>
      <section className="entry-bubble">
        <p>{entryBody}</p>
        <p className="entry-time">{entryRelativeTime}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Date),
};

export default ChatEntry;
