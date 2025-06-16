import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({entries, onLikeToggle }) => {
  const localSender = entries[0]?.sender || '';
  const entryComponents = entries.map(entry => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        isLocal={entry.sender === localSender}
        onLikeClick={() => onLikeToggle(entry.id)}
      />
    );
  });

  return (
    <div className="chat-log">
      {entryComponents}
    </div>
  );
};



ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;