import type { ReactNode } from 'react';

type AssistExcludedProperties  = 'selected' | 'onToggle' | 'onRemove' | 'avatar';
type FilterExcludedProperties  = 'onRemove' | 'avatar';
type InputExcludedProperties  = 'onToggle';
type SuggestionExcludedProperties  = 'selected' | 'onToggle' | 'onRemove' | 'avatar';
type Variant = 'assist' | 'filter' | 'input' | 'suggestion';
type Mode = 'flat' | 'outlined';


export type Properties = {
  /** Contenido principal del chip */
  children: ReactNode;
  /** Tipo de chip según MD3 (por defecto: 'assist') */
  variant?: Variant;
  /** Estilo visual (por defecto: 'flat') */
  mode?: Mode;
  /** Icono al inicio (no usar junto con avatar) */
  icon?: ReactNode; // Changed from Icon to icon
  /** Avatar al inicio (solo para input chips, no usar junto con startIcon) */
  avatar?: ReactNode;
  /** Indica si el chip está seleccionado (solo filter/input) */
  selected?: boolean;
  /** Deshabilita el chip */
  disabled?: boolean;
  /** Aplica elevación (sombra) */
  elevated?: boolean;
  /** Evento click */
  onClick?: (event: React.SyntheticEvent, properties: Properties) => void;
  /** Evento para remover el chip (muestra botón X, típico en input chips) */
  onRemove?: (event: React.SyntheticEvent, properties: Properties) => void;
  /** Evento para alternar selección (más semántico que onClick en filter chips) */
  onToggle?: (event: React.SyntheticEvent, selected: boolean, properties: Properties) => void;
};



export type AssistProperties = Omit<Properties, AssistExcludedProperties> & {  
  variant: 'assist';
};

export type FilterProperties = Omit<Properties, FilterExcludedProperties> & {
  variant: 'filter';
};

export type InputProperties = Omit<Properties, InputExcludedProperties> & {
  variant: 'input';
};

export type SuggestionProperties = Omit<Properties, SuggestionExcludedProperties> & {
  variant: 'suggestion';
};


export type ChipsProperties =
  | AssistProperties
  | FilterProperties
  | InputProperties
  | SuggestionProperties;
