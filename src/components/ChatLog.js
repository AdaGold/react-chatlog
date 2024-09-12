import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((chatEntry, i) => {
    return <ChatEntry
    key={i}
    id={chatEntry.id}
    sender={chatEntry.sender}
    body={chatEntry.body}
    timeStamp={chatEntry.timeStamp}
    liked={chatEntry.liked}
    onUpdateChatData={props.onUpdateChatData}
    />
  })
  
  return (
  <div>
    {chatEntries}
  </div>
  )
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })),
  onUpdateChatData: PropTypes.func.isRequired
};

export default ChatLog;