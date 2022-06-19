import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({sender, body, timeStamp}) => {

let senderClass = 'chat-entry local'
if (sender === 'Estragon') {
  senderClass = 'chat-entry remote'
}





  return (
    <div className={senderClass}>
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p> {body} </p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// {
//   sender: "Vladimir",
//   body: "why are you arguing with me",
//   timeStamp: "2018-05-29T22:49:06+00:00",
// },

ChatEntry.propTypes = {
  //Fill with correct proptypes
  
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
