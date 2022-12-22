import propTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, changeLike }) => {
  const chats = [];

  for (const entry of entries) {
    chats.push(
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        id={entry.id}
        changeLike={changeLike}
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
      liked: propTypes.bool.isRequired,
    })
  ),
  changeLike: propTypes.func.isRequired,
};
export default ChatLog;
