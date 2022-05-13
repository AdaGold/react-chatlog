import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [like, setLike] = useState(props.heart);

  const localRemote =
    props.odd === 0 ? 'chat-entry local' : 'chat-entry remote';

  const color = props.odd === 0 ? props.color0 : props.color1;
  const heartFill = like === true ? '❤️' : '🤍';

  const toggleLike = (id) => {
    props.updateHeartCallback(id);
    setLike(!like);
  };

  return (
    <div className={localRemote}>
      <span className="entry-name">{props.sender}</span>
      <div className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          onClick={() => toggleLike(props.id)}
          className="like"
          aria-label={heartFill}
          role="img"
        >
          {heartFill}
        </button>
      </div>
    </div>
  );
};

export default ChatEntry;
