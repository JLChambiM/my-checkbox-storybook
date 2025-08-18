import React, { useState } from 'react';
import './App.css';
import Chip from './components/chip'
import { Icon } from './components/icon';

function App() {

  return (
    <div className="App" style={{ padding: 32, textAlign: 'center' }}>
      <Chip icon={<Icon name="⭐" />} >Assist simple</Chip>
    </div>
  );
}

export default App;
