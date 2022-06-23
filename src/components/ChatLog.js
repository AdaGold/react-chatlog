import React from 'react';
import './ChatEntry.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import  { useState } from 'react';


const ChatLog = (props) =>{

  
  const entries=props.entries;
    const chatComponents= entries.map((message)=>(
    
        <ChatEntry
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            updatetoTalLikes={props.updateTotalLikes}
            localUser={props.localUser}
            updateMessageData={props.updateMessageData}

            />
  ));

return <section>{chatComponents}</section>
}

ChatLog.propTypes = {
 
  id:PropTypes.number,
  sender:PropTypes.string,
  body:PropTypes.string,
  liked:PropTypes.bool,
  timeStamp:PropTypes.string,
  updateMessageData:PropTypes.func
};

export default ChatLog;