import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = [];
  const chatLog = props.entries;

  for (const chatentry of chatLog) {
    chatEntryComponents.push(
      <ChatEntry
        sender={chatentry.sender}
        body={chatentry.body}
        timestamp={chatentry.timestamp}
      />
    );
  }

  return <div>{chatEntryComponents}</div>;
};

export default ChatLog;
