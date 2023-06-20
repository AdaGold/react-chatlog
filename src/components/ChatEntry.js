import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, changeLiked, liked }) => {
  const side = sender === 'Vladimir' ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${side}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /> </p>
        <button className="like" onClick = {() => changeLiked(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
