import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, isLiked, localSender }) => {
  const like = liked ? '❤️' : '🤍';
  const senderClass = sender === localSender ? 'local' : 'remote';
  return (
    <li className={`chat-entry ${senderClass}`}>
      <h2 className='entry-name'> {sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          className="like"
          onClick={() => isLiked(id)}
        >{like}</button>
      </section>
    </li>
  );
};


ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
