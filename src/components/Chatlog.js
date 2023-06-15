import React from 'react'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const Chatlog = ({ messages }) => {
    // console.log(messages)
    const messageComponents = messages.map((message, index) => {
        return (
            // console.log(message)
            <div key={index}>
                <ChatEntry
                    // message = {message}
                    id={message.id}
                    sender={message.sender}
                    body={message.body}
                    timeStamp={message.timeStamp}
                />
            </div>
        )});

    return (
        <section>
            <div>Chatlog</div>
            <ul>{messageComponents}</ul> 
        </section>
    );
};

Chatlog.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })
    )
};

export default Chatlog