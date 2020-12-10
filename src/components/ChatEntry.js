import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatEntry = ({sender, body, timeStamp}) => {
  let senderClass = 'chat-entry local'
  if (sender === 'Estragon') {
    senderClass = 'chat-entry remote'
  }

  return (
    <div className={senderClass}>
      <h2 className='entry-name'>{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className='entry-time'><Timestamp time={timeStamp} /></p>
      </section>
    </div>
  )
}

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default ChatEntry;