import React from 'react';

/**
 * Propiedades base comunes a todas las variantes de Chip.
 */
export type Properties = {
  /** Texto principal del chip. */
  label: string;
  /** Si el chip está deshabilitado. @default false */
  disabled?: boolean;
  /** Si el chip se muestra elevado (sombra). @default false */
  elevated?: boolean;
  /** Ícono opcional al inicio del chip. */
  icon?: React.ReactNode;
  /** Evento al presionar el chip. */
  onPress?: () => void;
  /** Evento al hacer long press. */
  onLongPress?: () => void;
  /** Etiqueta de accesibilidad personalizada. */
  accessibilityLabel?: string;
  /** Estilos personalizados para el contenedor. */
  style?: React.CSSProperties;
  /** Estilos personalizados para el texto. */
  labelStyle?: React.CSSProperties;
  /** Identificador único del chip. */
  id?: string;
};

/** Props específicas para FilterChip */
export type FilterChipSpecificProps = {
  /** Si el chip está seleccionado. @default false */
  selected?: boolean;
  /** Callback al seleccionar/deseleccionar el chip. */
  onSelect?: (selected: boolean) => void;
  /** Si el chip es removible (muestra ícono de eliminar). @default false */
  removable?: boolean;
  /** Callback al remover el chip. */
  onRemove?: () => void;
};

/** Props específicas para InputChip */
export type InputChipSpecificProps = {
  /** Si el chip está seleccionado. @default false */
  selected?: boolean;
  /** Callback al seleccionar/deseleccionar el chip. */
  onSelect?: (selected: boolean) => void;
  /** Avatar opcional (imagen o nodo React). */
  avatar?: React.ReactNode;
  /** Callback al remover el chip. */
  onRemove?: () => void;
};

/** Tipado discriminado para cada variante */
export type ChipProps =
  | (Properties & { variant: 'assist' })
  | (Properties & FilterChipSpecificProps & { variant: 'filter' })
  | (Properties & InputChipSpecificProps & { variant: 'input' })
  | (Properties & { variant: 'suggestion' });

/** (Opcional) Tipado para ChipSet */
export type SelectionMode = 'none' | 'single' | 'multiple';

export interface ChipSetProps {
  children: React.ReactNode;
  variant: 'assist' | 'filter' | 'input' | 'suggestion';
  selectionMode?: SelectionMode;
  spacing?: number;
  singleLine?: boolean;
  onSelectionChange?: (selectedIndices: number[]) => void;
  style?: React.CSSProperties;
}
