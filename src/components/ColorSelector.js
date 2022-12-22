import { useState } from 'react';
import './ColorSelector.css';

const ColorSelector = () => {
  const [colorSelection, setColorSelection] = useState('black');

  const onColorChange = (e) => {
    e.preventDefault();
    setColorSelection(e.target.value);
  };

  return (
    <div className="colorSelector">
      <input
        className="red"
        label="red"
        value="red"
        type="radio"
        checked={colorSelection === 'red'}
        onChange={onColorChange}
      />
      <input
        className="orange"
        label="orange"
        value="orange"
        type="radio"
        checked={colorSelection === 'orange'}
        onChange={onColorChange}
      />
      <input
        className="green"
        label="green"
        value="green"
        type="radio"
        checked={colorSelection === 'green'}
        onChange={onColorChange}
      />
      <input
        className="blue"
        label="blue"
        value="blue"
        type="radio"
        checked={colorSelection === 'blue'}
        onChange={onColorChange}
      />
      <input
        className="violet"
        label="violet"
        value="violet"
        type="radio"
        checked={colorSelection === 'violet'}
        onChange={onColorChange}
      />
    </div>
  );
};

export default ColorSelector;
