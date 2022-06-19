import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const createChat = (message) => {
    return <ChatEntry sender={message.sender} body={message.body} />;
}

function ChatLog(props) {
    const chatMessages = props.entries.map(createChat)
    // props.chatMessages.map(entry => <ChatEntry key={entry} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} />)
    return (
        <div className='chat-log'>
        <p>
        {chatMessages}
        </p> 

        </div>
    )
}

ChatEntry.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.array,
};


export default ChatLog;

