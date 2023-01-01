import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

//spread 
const ChatEntry = ({ updateChat, ...message}) => {

  const onLikeClick = () => {
    updateChat({ ...message, liked: !message.liked });
  };


  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        <p className="entry-time">
          //TimeStamp has time prop
          TimeStamp time={message.timeStamp} /> 
        </p>
        <button className="like" onClick={onLikeClick}>{message.liked ? '❤️':'🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //propTypes using learn template
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateChat: PropTypes.func.isRequired,
};

export default ChatEntry;
