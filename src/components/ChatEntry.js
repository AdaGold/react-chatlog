import React from 'react';
import Timestamp from './Timestamp';

import './ChatEntry.css';

class ChatEntry extends React.Component {
  render() {
    const entryClasses = `chat-entry ${this.props.entry.source}`;

    return (
      <article className={entryClasses}>
        <h2 className='entry-name'>{this.props.entry.sender}</h2>
        <div className='entry-bubble'>
          <p className='entry-body'>{this.props.entry.body}</p>
          <p className='entry-time'><Timestamp time={this.props.entry.timeStamp} /></p>
        </div>
      </article>
    );
  }
}

export default ChatEntry;
