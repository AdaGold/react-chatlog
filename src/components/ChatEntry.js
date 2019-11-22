import React from 'react';
import './ChatEntry.css';
import TimeStamp from './Timestamp'

const ChatEntry= (props) => {

    const localRemote = props.odd === 0 ? "chat-entry local" : "chat-entry remote"

    return(
        <div className={localRemote}>
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
