import React from 'react';
import ChatEntry from './ChatEntry';

import './ChatLog.css';

class ChatLog extends React.Component {
  render () {
    const entries = this.props.entries.map((entry, i) => {
      const source = i % 2 === 0 ? 'local' : 'remote';

      return <ChatEntry key={i} entry={{ ...entry, source }} />;
    });

    return (
      <section className="chat-log">
        {entries}
      </section>
    );
  }
}

export default ChatLog;
