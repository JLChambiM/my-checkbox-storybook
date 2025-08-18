import type { ReactNode, RefAttributes, SyntheticEvent } from 'react';

type AssistExcludedProperties  = 'selected' | 'onToggle' | 'onRemove' | 'avatar';
type FilterExcludedProperties  = 'onRemove' | 'avatar';
type InputExcludedProperties  = 'onToggle';
type SuggestionExcludedProperties  = 'selected' | 'onToggle' | 'onRemove' | 'avatar';
type Role = 'assist' | 'filter' | 'input' | 'suggestion';
type Variant = 'filled' | 'outlined';
type Color = 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'warning'

export type Properties = RefAttributes<HTMLSpanElement> &  {
  /** Tipo de chip (por defecto: 'assist') */
  role?: Role;
  /** Contenido principal del chip */
  children: ReactNode;
  /** Color del chip */
  color?: Color;
  /** Estilo visual (por defecto: 'filled') */
  variant?: Variant;
  /** Icono al inicio (no usar junto con avatar) */
  icon?: ReactNode; // Changed from Icon to icon
  /** Avatar al inicio (solo para input chips, no usar junto con startIcon) */
  avatar?: ReactNode;
  /** Indica si el chip está seleccionado (solo filter/input) */
  selected?: boolean;
  /** Deshabilita el chip */
  disabled?: boolean;
  /** Evento click */
  onClick?: (event: SyntheticEvent, properties: Properties) => void;
  /** Evento para remover el chip (muestra botón X, típico en input chips) */
  onRemove?: (event: SyntheticEvent, properties: Properties) => void;
  /** Evento para alternar selección (más semántico que onClick en filter chips) */
  onToggle?: (event: SyntheticEvent, selected: boolean, properties: Properties) => void;
};



export type AssistProperties = Omit<Properties, AssistExcludedProperties> & {  
  role: 'assist';
};

export type FilterProperties = Omit<Properties, FilterExcludedProperties> & {
  role: 'filter';
};

export type InputProperties = Omit<Properties, InputExcludedProperties> & {
  role: 'input';
};

export type SuggestionProperties = Omit<Properties, SuggestionExcludedProperties> & {
  role: 'suggestion';
};


export type ChipsProperties =
  | AssistProperties
  | FilterProperties
  | InputProperties
  | SuggestionProperties;
