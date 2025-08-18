import React, { useState } from 'react';
import './App.css';
import Chip from './components/chip';

// Componente Avatar simple
const Avatar = () => (
  <div style={{
    width: 24,
    height: 24,
    borderRadius: '50%',
    background: '#6750A4',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 14
  }}>
    A
  </div>
);

// Componente Icono simple (SVG)
const SimpleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="#6750A4" strokeWidth="2" fill="none" />
    <path d="M10 6V10L13 12" stroke="#6750A4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

function App() {
  // Estado para chips de filtro
  const [selectedFilter, setSelectedFilter] = useState([false, true]);
  // Estado para chips de input
  const [inputChips, setInputChips] = useState([
    { id: 1, label: 'Chip Input 1' },
    { id: 2, label: 'Chip Input 2' }
  ]);

  // Estilo para agrupar y centrar chips
  const chipRow: React.CSSProperties = {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 16
  };

  return (
    <div className="App" style={{ padding: 32, textAlign: 'center' }}>
      <h2>Assist Chip</h2>
      <div style={chipRow}>
        <Chip>Assist simple</Chip>
        <Chip icon={<SimpleIcon />} children="assist"></Chip>
      </div>

      <h2 style={{ marginTop: 32 }}>Filter Chip</h2>
      <div style={chipRow}>
        <Chip
          variant="filter"
          selected={selectedFilter[0]}
          onToggle={(event, selected) => setSelectedFilter([selected, selectedFilter[1]])}
        >
          Filtro 1
        </Chip>
        <Chip
          variant="filter"
          selected={selectedFilter[1]}
          onToggle={(event, selected) => setSelectedFilter([selectedFilter[0], selected])}
          icon={<SimpleIcon />}
        >
          Filtro 2 con icono
        </Chip>
      </div>

      <h2 style={{ marginTop: 32 }}>Input Chip</h2>
      <div style={chipRow}>
        {inputChips.map(chip => (
          <Chip
            key={chip.id}
            variant="input"
            avatar={<Avatar />}
            onRemove={() => setInputChips(inputChips.filter(c => c.id !== chip.id))}
          >
            {chip.label}
          </Chip>
        ))}
      </div>

      <h2 style={{ marginTop: 32 }}>Suggestion Chip</h2>
      <div style={chipRow}>
        <Chip variant="suggestion">Sugerencia simple</Chip>
        <Chip variant="suggestion" icon={<SimpleIcon />}>Sugerencia con icono</Chip>
      </div>

      <h2 style={{ marginTop: 32 }}>Chips deshabilitados</h2>
      <div style={chipRow}>
        <Chip disabled>Assist deshabilitado</Chip>
        <Chip variant="filter" disabled icon={<SimpleIcon />}>Filtro deshabilitado</Chip>
        <Chip variant="input" disabled avatar={<Avatar />}>Input deshabilitado</Chip>
        <Chip variant="suggestion" disabled>Sugerencia deshabilitada</Chip>
      </div>

      <h2 style={{ marginTop: 32 }}>Chips elevados</h2>
      <div style={chipRow}>
        <Chip elevated>Assist elevado</Chip>
        <Chip variant="filter" elevated selected={true} icon={<SimpleIcon />}>Filtro elevado</Chip>
        <Chip variant="input" elevated avatar={<Avatar />}>Input elevado</Chip>
        <Chip variant="suggestion" elevated>Sugerencia elevada</Chip>
      </div>
    </div>
  );
}

export default App;
