import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const createChat = (message) => {
  return <ChatEntry sender={message.sender} body={message.body} />;
};

const ChatLog = (props) => {
  // console.log(props.entries);
  return (
    <div className="chat-log">
      {props.entries.map(createChat)}
      {/* <ChatEntry sender="Vladimir" body="why are you arguing with me" />
      <ChatEntry sender="Estragon" body="Because you are wrong." /> */}
      {/* <ChatEntry /> */}
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.array,
};

export default ChatLog;
