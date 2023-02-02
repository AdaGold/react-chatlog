import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {
  //const [Liked, setLiked] = useState(props.liked);
  
  const heartColor = props.liked ? '❤️' : '🤍';
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button className="like" onClick={()=> props.onToggleHeart(props.id)}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleHeart: PropTypes.func.isRequired,
};

export default ChatEntry;
