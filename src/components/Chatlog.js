import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

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