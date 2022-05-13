import React from 'react';

const ColorChoice = (props) => {
  return (
    <section className='color widget'>
      <h3 className={props.color}>{props.name}'s color: </h3>
      <nav>
        <button className='red' onClick={() => props.setColorCallback('red')}>
          <span role='img' aria-label='red dot'>
            🔴
          </span>
        </button>
        <button
          className='orange'
          onClick={() => props.setColorCallback('orange')}
        >
          <span role='img' aria-label='orange dot'>
            🟠
          </span>
        </button>
        <button
          className='yellow'
          onClick={() => props.setColorCallback('yellow')}
        >
          <span role='img' aria-label='yellow dot'>
            {' '}
            🟡
          </span>
        </button>
        <button
          className='green'
          onClick={() => props.setColorCallback('green')}
        >
          <span role='img' aria-label='green dot'>
            🟢
          </span>
        </button>
        <button className='blue' onClick={() => props.setColorCallback('blue')}>
          <span role='img' aria-label='blue dot'>
            🔵
          </span>
        </button>
        <button
          className='purple'
          onClick={() => props.setColorCallback('purple')}
        >
          <span role='img' aria-label='purple dot'>
            🟣
          </span>
        </button>
      </nav>
    </section>
  );
};

export default ColorChoice;
