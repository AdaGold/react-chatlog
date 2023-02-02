//Presentational Component
import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const changeLikeData = () => {
    const chatData = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateChatsData(chatData);
  };
  //I was did the recolor heart emoji first.
  // const heartColor = props.liked ? 'liked' : 'like';

  const heartColor = props.liked ? '❤️' : '🤍';
  const messageType = props.sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${messageType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={changeLikeData}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateChatsData: PropTypes.func.isRequired,
};

export default ChatEntry;
