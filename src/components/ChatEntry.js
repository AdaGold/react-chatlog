import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeClick }) => {
  const localOrRemote =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';
  const likedDisplay = liked ? '❤️' : '🤍';

  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <div className="entry-time">
          <TimeStamp time={timeStamp} />
        </div>
        <button
          className="like"
          onClick={() => {
            onLikeClick(id);
          }}
        >
          {likedDisplay}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  onLikeClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
