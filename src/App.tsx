import React from 'react';
import './App.css';
import Chip from './components/chip'
import { Icon } from './components/icon';

function App() {

  return (
    <div className="App" style={{ padding: 32, textAlign: 'center' }}>
      <Chip 
      // icon={<Icon name="⭐" />}
      variant='filled'
			color='secondary' 
      >
        primary</Chip>
      <Chip
        icon={<Icon name="⭐" />}
        variant='outlined'
        color='error'
        role='input'
        onRemove={() => console.log('remove')}
      >
        input chip</Chip>
      <Chip
        icon={<Icon name="⭐" />}
        variant='filled'
        color='success'
      >
        Assist chip</Chip>
      <Chip
        variant='filled'
        color='default'
        role='input'
        onRemove={() => console.log('hola')}
      >
        A</Chip>
      <Chip
        icon={<Icon name="⭐" />}
        variant='outlined'
        color='default'
      >
        Assist chip</Chip>

      <Chip 
        href="https://www.google.com/?hl=es"
        target="_blank"
        color='success'
        variant='outlined'
        >Google</Chip>
      <Chip href="https://www.facebook.com/"
        target="_self" 
        color='error'
      >Facebook</Chip>
      <Chip href="https://www.microsoft.com/es-co/microsoft-teams/"
        target="_parent"
        color='warning'
      >Microsoft Teams</Chip>
    </div>
  );
}

export default App;
