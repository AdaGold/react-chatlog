import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

function ChatLog({ entries, updateLike }) {
  const entryComponents = [];

  for (const message of entries) {
    entryComponents.push(
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        updateLike={updateLike}
      />
    );
  }

  return <div className="chat-log">{entryComponents}</div>;
}

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
  updateLike: PropTypes.func.isRequired,
};

export default ChatLog;
