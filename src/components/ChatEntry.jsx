import './ChatEntry.css';

const ChatEntry = () => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <replace-with-relevant-semantic-element className="chat-entry local">
      <h2 className="entry-name">Replace with name of sender</h2>
      <section className="entry-bubble">
        <p>Replace with body of ChatEntry</p>
        <p className="entry-time">Replace with TimeStamp component</p>
        <button className="like">🤍</button>
      </section>
    </replace-with-relevant-semantic-element>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
