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


