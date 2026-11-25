import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp }) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className="chat-entry local">
      <h2 className="entry-name"> {sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" >🤍</button>
      </section>
    </div>
  );
};

// const chatEntryComponents = messages.map((message) => {
//   return (
//     // Replace the outer tag name with a semantic element that fits our use case
//     <div className="chat-entry local">
//       <h2 className="entry-name"> {message.sender}</h2>
//       <section className="entry-bubble">
//         <p>{message.body}</p>
//         <p className="entry-time">
//           <TimeStamp time={message.timeStamp}/>
//         </p>
//         <button className="like" >🤍</button>
//       </section>
//     </div>
//   );
// });
// return (
//   <section className='chat'>
//     <ul>{chatEntryComponents}</ul>
//   </section>
// );


ChatEntry.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  )
};

export default ChatEntry;
