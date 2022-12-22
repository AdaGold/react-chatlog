import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [like, setLike] = useState(0);

  const heartToggle = () => {
    setLike(!like);
    props.changeLike(props.id);
  };
  const heartColor = like === true ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">
        {props.sender}
        {props.liked}
      </h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={heartToggle}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  changeLike: PropTypes.func.isRequired,
};

export default ChatEntry;

/* <button className="like" onClick={heartToggle}>
          {heartColor}
        </button> */
