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


      {/* Assist chips */}
      <Chip radius="square">Square Chip</Chip>
      <Chip radius="rounded">Rounded Chip</Chip>
      <Chip radius={8}>Custom 8px</Chip>
      <Chip radius="50%">Pill Shape</Chip>

      {/* Filter chips */}
      <Chip role="filter" selected={true} radius="square">Selected Filter</Chip>
      <Chip role="filter" selected={false} radius="rounded">Unselected Filter</Chip>

      {/* Input chips */}
      <Chip role="input" radius="square" onRemove={() => {}}>Removable</Chip>
      <Chip role="input" avatar={<img src="/logo512.png" />} radius="rounded">With Avatar</Chip>

      {/* Suggestion chips */}
      <Chip role="suggestion" radius={12}>Suggestion</Chip>
    </div>
  );
}

export default App;
