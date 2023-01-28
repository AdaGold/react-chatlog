//Container Component

import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  // function for passing into ChatLog
  const getChatEntry = (entries) => {
    return entries.map((chatdata) => {
      return (
        <ChatEntry
          id={chatdata.id}
          sender={chatdata.sender}
          body={chatdata.body}
          timeStamp={chatdata.timeStamp}
          liked={chatdata.liked}
        />
      );
    });
  };

  return <section>{getChatEntry(entries)}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ChatLog;
