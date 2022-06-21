import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  // const [likeCount, setLikeCount] = useState(0);

  // const likeMessage = () => {
  //   setLikeCount(likeCount +1);
  // }

  const [likeMessage, setLikeMessage] = useState(liked);
  const likeButton = liked? '❤️' : '🤍';

  // FUNCTION TO CALCULATE YEARS AGO !!
  const handleLike = () => {
    props.onLikeMessage(props.id);
  };

  const handleUnlikeMessage = () => {
    props.onUnlikeMessage(props.id);
  };

  // const likeButton = () => {
  //   return props.liked = true ? '❤️' : '🤍';
  // };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp} 4 years ago/</p>
        <button className="like" onClick={handleLike}>
          {likeButton}
        </button>
        <button onClick={handleUnlikeMessage}>unlikeButton</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikeMessage: PropTypes.func.isRequired,
  onUnlikeMessage: PropTypes.func.isRequired,

  //Fill with correct proptypes
};

// let sender = 'Estragon';
// let body =
//   'NO! YOU ARE A ROBOT!! I am a human being. Just like the one that created you.';
// let timeStamp = '2018-05-29T23:00:08+00:00';
//     ❤️
// ChatEntry(sender, body, timeStamp);

export default ChatEntry;
