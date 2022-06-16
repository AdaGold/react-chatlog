import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const createChat = (message, index) => {
    return (
      <ChatEntry
        id={message.id}
        sender={message.sender}
        body={message.body}
        liked={message.liked}
        timeStamp={message.timeStamp}
        key={index}
        updateMessageData={props.updateMessageData}
        totalLikes={props.totalLikes}
        updateTotalLikes={props.updateTotalLikes}
      />
    );
  };
  return (
    <div className="chat-log">
      {props.messages && props.messages.map(createChat)};
    </div>
  );
};

ChatEntry.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  updateMessageData: PropTypes.func,
  totalLikes: PropTypes.number,
  updateTotalLikes: PropTypes.func,
};

export default ChatLog;
