import propTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chats = [];

  for (const entry of entries) {
    chats.push(
      <ChatEntry
        key={entry.sender}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  }
  return <div className="chat-log">{chats}</div>;
};

ChatLog.propTypes = {
  entries: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      sender: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
      timeStamp: propTypes.string.isRequired,
    })
  ),
};
export default ChatLog;
