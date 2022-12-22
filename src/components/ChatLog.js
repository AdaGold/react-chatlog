import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeClick }) => {
  const messages = entries.map((message, index) => {
    return (
      <div key={index}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onLikeClick={onLikeClick}
        ></ChatEntry>
      </div>
    );
  });

  return (
    <div className="chat-log">
      <h2>Messages</h2>
      <ul>{messages}</ul>
    </div>
  );
};

ChatLog.propTypes = {
  onLikeClick: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.func,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatLog;
