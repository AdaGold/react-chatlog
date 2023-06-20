import React from 'react'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({ entries, changeLiked}) => {
    // console.log(messages)
    const messageComponents = entries.map((entry, index) => {
        return (
            // console.log(message)
            <div key={index}>
                <ChatEntry
                    // message = {message}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    changeLiked={changeLiked}
                    liked={entry.liked}
                />
            </div>
        )});

    return (
        <section>
            <div>ChatLog</div>
            <ul>{messageComponents}</ul> 
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    )
};

export default ChatLog