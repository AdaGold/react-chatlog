import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const senderLocation = props.sender === 'Estragon'
    ? 'chat-entry remote'
    : 'chat-entry  local';

  return (
    <div className={senderLocation}>
      <section>
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
          <button
            className="like"
            onClick={
              () => props.onMessageLiked(props.id)
            }>{props.liked ? '❤️' : '🤍'}
          </button>
        </section>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.string.isRequired,
  onMessageLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
