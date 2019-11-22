import React from 'react';
import './ChatEntry.css';
import TimeStamp from './Timestamp'

const ChatEntry= (props) => {
    return(
        
        <div className="chat-entry">
            <h1 className="entry-name">{props.sender}</h1>
            <div className="entry-bubble">
                <p>{props.body}</p>
                <p className = 
                "entry-time"><TimeStamp time={props.timeStamp}/></p>
            </div>
        </div>
    );
}

export default ChatEntry;
