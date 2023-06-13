import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = [];
  const chatEntries = props.entries;
  const updateLikes = props.updateLikes;

  for (const chatentry of chatEntries) {
    chatEntryComponents.push(
      <div key={chatentry.id}>
        <ChatEntry
          id={chatentry.id}
          sender={chatentry.sender}
          body={chatentry.body}
          timeStamp={chatentry.timeStamp}
          liked={chatentry.liked}
          updateLikes={updateLikes}
        />
      </div>
    );
  }

  return <div>{chatEntryComponents}</div>;
};

export default ChatLog;
