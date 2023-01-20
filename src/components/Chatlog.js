import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
// import TimeStamp from'./TimeStamp';


const ChatLog = (props) => {

    return (
        <>
            {props.entries.map((entry) => (
        <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            key={entry.id}
            liked={entry.liked}
            onToggleHeart={props.onToggleHeart}
        />
        ))}
        </>
    )

}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })),
    onToggleHeart: PropTypes.func.isRequired,
}

export default ChatLog;