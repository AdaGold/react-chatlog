import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp className="entry-time" time="2018-05-29T22:49:06+00:00" />
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  ChatEntry: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
  }),
};

export default ChatEntry;
