import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateLike }) => {
  const senderName =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const likeButtonContent = liked ? '❤️' : '🤍';

  return (
    <div className={senderName}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => updateLike(id, !liked)}>
          {likeButtonContent}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool
  updateLike: PropTypes.func
};

export default ChatEntry;
