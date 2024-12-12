import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

function ChatLog(props) {
  const chatMessages = props.entries.map((message) => {
    return (
      <div key={message.id} className="chat-log">
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onMessageLiked={props.onMessageLiked}
          localColor={props.localColor}
          remoteColor={props.remoteColor}
        />
      </div>
    );
  });

  return chatMessages;
}

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })).isRequired,
  onMessageLiked: PropTypes.func.isRequired,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
};

export default ChatLog;
