import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = [];
  const chatEntries = props.entries;
  const updateLikes = props.updateLikes;

  for (const chatentry of chatEntries) {
    chatEntryComponents.push(
      <ChatEntry
        id={chatentry.id}
        sender={chatentry.sender}
        body={chatentry.body}
        timestamp={chatentry.timestamp}
        liked={chatentry.liked}
        updateLikes={updateLikes}
      />
    );
  }

  return <div>{chatEntryComponents}</div>;
};

export default ChatLog;
