import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'



const ChatLog = (props) => {
    const {entries, updateLike} = props;
    return (
        <div className='chat-log'>
            {entries.map((entry) => (
                <ChatEntry 
                id={entry.id}
                key={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateLike={updateLike}
                />
                ))}
        </div>
        );
    };
export default ChatLog;


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })
    ),
    updateLike: PropTypes.func.isRequired
};
