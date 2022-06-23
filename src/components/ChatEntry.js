import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import moment from 'moment'

const ChatEntry = (props) => {

debugger
  const onLikeButtonClick = () => {

    const updatedMessage = { ...props, liked: !props.liked }
    props.updateMessageData(updatedMessage);

  };

  const printHeart = props.liked ? '❤️' : '🤍';
  return (
    <div className={
      props.sender === props.localUser
        ? 'chat-entry local'
        : 'chat-entry remote'
    }>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{moment(props.timeStamp).fromNow()}</p>
        <button className="like" onClick={onLikeButtonClick}>{printHeart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {

  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  liked: PropTypes.bool,
  timeStamp: PropTypes.string,
  updateMessageData: PropTypes.func
};


export default ChatEntry;
