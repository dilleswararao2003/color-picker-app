// src/App.js
import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple","black","pink","peach"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
