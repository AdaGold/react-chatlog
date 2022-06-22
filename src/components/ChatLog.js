import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    // console.log(props.entries);
    const createChat = (message, index) => {
    return (
    <ChatEntry
        id={message.id}
        sender={message.sender}
        body={message.body}
        liked={message.liked}
        timeStamp={message.timeStamp}
        key={index}
        updateMessageData={props.updateMessageData}
        totalLikes={props.totalLikes}
        updateTotalLikes={props.updateTotalLikes}
    />
    );
};
return (
    <div className="chat-log">
    
    {props.entries && props.entries.map(createChat)}
    </div>
)
};


ChatLog.propTypes = {

entries: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
    })
).isRequired,
updateMessageData: PropTypes.func,
totalLikes: PropTypes.number,
updateTotalLikes: PropTypes.func,
};

export default ChatLog;
