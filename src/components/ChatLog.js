import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = (props) =>{
  const entries = props.entries;
  const chatEntry = entries.map(entry =>{
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onToggleHeart={props.onToggleHeart}
        />
    );
  });
  return (
    <section>
      {chatEntry}
    </section>
  )
};

ChatLog.prototype = {
  entries:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  )

}
export default ChatLog;