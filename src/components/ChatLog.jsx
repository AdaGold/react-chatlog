import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, localSender, isLiked }) => {
  const chatEntryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        isLiked={isLiked}
        localSender={localSender}
      />
    );
  });
  return (
    <section className='chat'>
      <ul className='chat-entries'>{chatEntryComponents}</ul>
    </section>
  );
};


ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      localSender:PropTypes.bool.isRequired,
    })
  ).isRequired,
  isLiked: PropTypes.func.isRequired
};

export default ChatLog;