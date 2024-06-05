import PropTypes from 'prop-types';
import ColorChoice from './ColorChoice';

const ChatPageHeader = (props) => {
  const setSenderColor0 = (newColor) => {
    props.setColor0(newColor);
  };
    
  const setSenderColor1 = (newColor) => {
    props.setColor1(newColor);
  };

  const coloredName1 = (
    <span id="sender1" className={props.color0}>
      {props.sender0}
    </span>
  );

  const coloredName2 = (
    <span id="sender2" className={props.color1}>
      {props.sender1}
    </span>
  );

  return (
    <header>
      <h1>
        Chat between {coloredName1} and {coloredName2}
      </h1>
      <section>
        <ColorChoice
          setColorCallback={setSenderColor0}
          name={props.sender0}
          color={props.color0}
        />
        <h2 id="heartWidget" 
          className="widget" 
          role="img" 
          aria-label="filled red heart">
            {props.totalLikes} ❤️s
        </h2>
        <ColorChoice
          setColorCallback={setSenderColor1}
          name={props.sender1}
          color={props.color1}
        />
      </section>
    </header>
  );
};

ChatPageHeader.propTypes = {
  color0: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  sender0: PropTypes.string.isRequired,
  sender1: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  setColor0: PropTypes.func.isRequired,
  setColor1: PropTypes.func.isRequired,
};

export default ChatPageHeader;