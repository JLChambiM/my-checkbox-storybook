<<<<<<< HEAD
import { ReactNode, MouseEvent, CSSProperties } from 'react';

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
  startIcon?: ReactNode;
  /** Avatar al inicio (solo para input chips, no usar junto con startIcon) */
  avatar?: ReactNode;
  /** Indica si el chip está seleccionado (solo filter/input) */
  selected?: boolean;
  /** Deshabilita el chip */
  disabled?: boolean;
  /** Aplica elevación (sombra) */
  elevated?: boolean;
  /** Evento click */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Evento para remover el chip (muestra botón X, típico en input chips) */
  onRemove?: () => void;
  /** Evento para alternar selección (más semántico que onClick en filter chips) */
  onToggle?: (selected: boolean) => void;
  /** Texto alternativo para accesibilidad */
  'aria-label'?: string;
  /** Estilos personalizados */
  style?: CSSProperties;
  /** Clase CSS personalizada */
  className?: string;
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
=======
import type { ReactNode } from 'react';

type ChipCommonProperties = {
  // ===== CONTENIDO =====
  /**
   * El contenido del componente.
   */
  label?: string;
  /**
   * Contenido anidado dentro del chip (alternativa a label).
   */
  children?: ReactNode;
  /**
   * icono opcional del chip
   * @default undefined
   */
  icon?: ReactNode;

  // ===== COMPORTAMIENTO =====
  /**
   * Evento al presionar el chip.
   * Proporciona el evento sintético y las propiedades actuales.
   */
  onPress?: (event: React.SyntheticEvent, properties: Properties) => void;
  /** 
   * Evento al hacer long press.
   * Proporciona el evento sintético y las propiedades actuales.
   */
  onLongPress?: (event: React.SyntheticEvent, properties: Properties) => void;
  /**
   * Evento onChange que proporciona el evento sintético y las propiedades actuales.
   */
  onChange?: (event: React.SyntheticEvent, properties: Properties) => void;

  // ===== ESTADOS =====
  /**
   * si el chip esta deshabilitado.
   * @default false 
   */
  disabled?: boolean;
  /**
   * si el chip esta elevado.
   * @default false
   */
  elevated?: boolean;

  // ===== ACCESIBILIDAD =====
  /** 
   * Etiqueta de accesibilidad personalizada.
   */
  accessibilityLabel?: string;

  // ===== APARIENCIA =====
  /**
   * Densidad del chip.
   * @default 'comfortable'
   */
  density?: 'comfortable' | 'compact';
  /**
   * Forma del chip.
   * @default 'rounded'
   */
  shape?: 'rounded' | 'rectangular';
}; 

type AssistChipProperties = ChipCommonProperties & {
  variant: 'assist';
};

type FilterChipProperties = ChipCommonProperties & {
  variant: 'filter'
  /** 
   * Si el chip está seleccionado. 
   * @default false 
   */
  selected?: boolean;
  /** 
   * Callback al seleccionar/deseleccionar el chip.
   * Proporciona el estado seleccionado, el evento sintético y las propiedades actuales.
   */
  onSelect?: (selected: boolean, event: React.SyntheticEvent, properties: Properties) => void;
  /** 
   * Si el chip es removible (muestra ícono de eliminar). 
   * @default false 
   */
  removable?: boolean;
  /** 
   * Callback al remover el chip.
   * Proporciona el evento sintético y las propiedades actuales.
   */
  onRemove?: (event: React.SyntheticEvent, properties: Properties) => void;
};

type InputChipProperties = ChipCommonProperties & {
  variant: 'input'
  /** 
   * Si el chip está seleccionado. 
   * @default false 
   */
  selected?: boolean;
  /** 
   * Callback al seleccionar/deseleccionar el chip.
   * Proporciona el estado seleccionado, el evento sintético y las propiedades actuales.
   */
  onSelect?: (selected: boolean, event: React.SyntheticEvent, properties: Properties) => void;
  /** 
   * Avatar opcional (imagen o nodo React).
   */
  avatar?: ReactNode;
  /** 
   * Si el chip es removible (muestra ícono de eliminar). 
   * @default false 
   */
  removable?: boolean;
  /** 
   * Callback al remover el chip.
   * Proporciona el evento sintético y las propiedades actuales.
   */
  onRemove?: (event: React.SyntheticEvent, properties: Properties) => void;
};

type SuggestionChipProperties = ChipCommonProperties & {
  variant: 'suggestion';
};

export type Properties =
  | AssistChipProperties
  | FilterChipProperties
  | InputChipProperties
  | SuggestionChipProperties;


>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
