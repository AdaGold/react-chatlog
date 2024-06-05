import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    return (
        <ChatEntry
          id={entry.id}
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          color0={props.color0}
          color1={props.color1}
          liked={entry.liked}
          updateLiked={props.updateLiked}
        />
    );
  });

  return <section className="chat-log">{entryComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateLiked: PropTypes.func.isRequired,
  color0: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
};

export default ChatLog;