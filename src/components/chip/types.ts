import { ReactNode } from 'react';

/** Tipos de chip según Material Design 3 */
export type Variant = 'assist' | 'filter' | 'input' | 'suggestion';

/** Modo visual del chip */
export type Mode = 'flat' | 'outlined';

/** Props base del componente Chip (API esencial, cubre el 80% de los casos) */
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
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Corrected event type
  /** Evento para remover el chip (muestra botón X, típico en input chips) */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Evento para alternar selección (más semántico que onClick en filter chips) */
  onToggle?: (selected: boolean) => void;
};

/** Props específicas por variante (uso interno, para validación estricta) */
export type AssistProperties = Omit<Properties, 'selected' | 'onToggle' | 'onRemove' | 'avatar'> & {
  variant: 'assist';
};

export type FilterProperties = Omit<Properties, 'onRemove' | 'avatar'> & {
  variant: 'filter';
};

export type InputProperties = Omit<Properties, 'onToggle'> & {
  variant: 'input';
};

export type SuggestionProperties = Omit<Properties, 'selected' | 'onToggle' | 'onRemove' | 'avatar'> & {
  variant: 'suggestion';
};

/** Unión estricta para validación por variante */
export type StrictChipProps =
  | AssistProperties
  | FilterProperties
  | InputProperties
  | SuggestionProperties;
