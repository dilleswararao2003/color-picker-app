// src/ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css'; // Import CSS file

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setIsColorListVisible] = useState(false);

  const handleButtonClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You selected the color: {selectedColor}</p>
      )}
    </div>
  );
}

export default ColorPicker;
