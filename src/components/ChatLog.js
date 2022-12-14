import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

import messages from '../data/messages.json';

function ChatLog({ messages }) {
  const entryComponents = [];

  for (const message of messages) {
    entryComponents.push(
      <li key={message.id}>
        <ChatEntry
          key={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
      </li>
    );
  }

  return <div>{entryComponents}</div>;
}

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.instanceOf(Date),
    })
  ),
};

export default ChatLog;
