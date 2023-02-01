//Container Component

import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getChatEntry = props.entries.map((entrie) => {
    return (
      <ChatEntry
        key={entrie.id}
        id={entrie.id}
        sender={entrie.sender}
        body={entrie.body}
        timeStamp={entrie.timeStamp}
        liked={entrie.liked}
        updateChatsData={props.updateChatsData}
      />
    );
  });
  return <section>{getChatEntry}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }).isRequired
  ),
  updateChatsData: PropTypes.func.isRequired,
};

export default ChatLog;
