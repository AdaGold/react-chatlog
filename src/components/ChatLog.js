import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';


const ChatLog = (props) =>{
  const entries = props.entries;
  const chatEntry = entries.map((entry) =>{
    return (
      <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        />
    );
  });
  return (
    <section>
      {chatEntry}
    </section>
  )
};

export default ChatLog;