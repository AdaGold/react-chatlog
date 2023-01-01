import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, updateChatEntry }) => {
return (
    <ul className="chat-entry local">
    {entries.map((message) => {
        return (
        <ChatEntry
            key={message.id}
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            updateChat={updateChatEntry}
        />
    );
})}
    </ul>
);
};

    ChatLog.propTypes = {
entries: PropTypes.arrayOf(
PropTypes.shape({
sender: PropTypes.string.isRequired,
body: PropTypes.string.isRequired,
timeStamp: PropTypes.string.isRequired,
liked: PropTypes.bool.isRequired,
    })
),
    updateChatEntry: PropTypes.func.isRequired,
};

export default ChatLog;