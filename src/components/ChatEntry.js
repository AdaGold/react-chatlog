import React from 'react';
import Timestamp from './Timestamp';

class ChatEntry extends React.Component {
  render() {
    const entryClasses = `chat-entry ${this.props.entry.source}`;

    return (
      <article className={entryClasses}>
        <h1 className='entry-name'>{this.props.entry.sender}</h1>
        <div className='entry-bubble'>
          <p className='entry-body'>{this.props.entry.body}</p>
          <p className='entry-time'><Timestamp time={this.props.entry.timeStamp} /></p>
        </div>
      </article>
    );
  }
}

export default ChatEntry;
