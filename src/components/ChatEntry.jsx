import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLiked = () => {
    props.updateLiked(props.id);
  };

  const likedButtonImage = props.liked ? '❤️' : '🤍';
  const isLeftSender = props.id % 2;
  const color = isLeftSender ? props.color0 : props.color1;
  const senderClass = isLeftSender ? 'chat-entry local' : 'chat-entry remote';

  return (
    <article className={senderClass}>
      <span className="entry-name">{props.sender}</span>
      <div className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button
          onClick={() => toggleLiked(props.id)}
          className="like"
          aria-label={likedButtonImage}
          role="img"
        >
          {likedButtonImage}
        </button>
      </div>
    </article>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLiked: PropTypes.func.isRequired,
  color0: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
};

export default ChatEntry;