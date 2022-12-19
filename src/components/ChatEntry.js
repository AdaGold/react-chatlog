import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.id}</p>
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <p>likes: {props.likeCount}</p>
        {/* using id to reference specific chat entry; maybe use props.liked if that doesn't work */}
        <button className="like" onClick={() => props.onLikeChatEntry(props.id)}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  likeChatEntry: PropTypes.func.isRequired
};

export default ChatEntry;
