import PropTypes from 'prop-types';

const ColorChoice = (props) => {
  return (
    <section className="color widget">
      <h3 className={props.color}>{props.name}&apos;s color: </h3>
      <nav>
        <button 
          className="red" 
          role="img" 
          aria-label="red dot"
          onClick={() => props.setColorCallback('red')}>
            🔴
        </button>
        <button
          className="orange" 
          role="img" 
          aria-label="orange dot"
          onClick={() => props.setColorCallback('orange')}
        >
            🟠
        </button>
        <button
          className="yellow"
          role="img" 
          aria-label="yellow dot"
          onClick={() => props.setColorCallback('yellow')}
        >
            🟡
        </button>
        <button
          className="green"
          role="img" 
          aria-label="green dot"
          onClick={() => props.setColorCallback('green')}
        >
            🟢
        </button>
        <button 
          className="blue" 
          role="img" 
          aria-label="blue dot"
          onClick={() => props.setColorCallback('blue')}>
            🔵
        </button>
        <button
          className="purple"
          role="img" 
          aria-label="purple dot"
          onClick={() => props.setColorCallback('purple')}
        >
            🟣
        </button>
      </nav>
    </section>
  );
};

ColorChoice.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setColorCallback: PropTypes.func.isRequired
};

export default ColorChoice;