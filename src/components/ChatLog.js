import React from 'react';
import ChatEntry from './ChatEntry'

const ChatLog= (props) => {
    const entries =  props.entries
  
    const entryComponents = entries.map((entry, i) => {
      return (
        <div className="chat-log" key={i}>
          <ChatEntry sender={ entry.sender } body={ entry.body } timeStamp={entry.timeStamp}/>
        </div>
      );
    });
  
    return entryComponents
  };

  export default ChatLog;