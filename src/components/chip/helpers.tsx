import _ from 'lodash';
import clsx from 'clsx';
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
import type { Properties } from './types';

/**
 * Devuelve las propiedades del chip con valores por defecto según la variante.
 * @param properties - Propiedades del chip
 * @returns Propiedades completas con valores por defecto
 */
<<<<<<< HEAD
export function toDefaults(properties?: Properties): Required<Properties> {
  return _.defaults({}, properties, {
    // Variante y modo
    variant: 'assist',
    mode: 'flat',

    // Contenido
    children: '',
    icon: null,
    avatar: null,
    closeIcon: null,

    // Estados y apariencia
    selected: false,
    selectedColor: '',
    showSelectedOverlay: false,
    showSelectedCheck: false,
    disabled: false,
    compact: false,
    elevated: false,

    // Accesibilidad
    accessibilityLabel: '',
    closeIconAccessibilityLabel: '',

    // Eventos
    onPress: () => {},
    onLongPress: () => {},
    onPressIn: () => {},
    onPressOut: () => {},
    onClose: () => {},

    delayLongPress: 0,

    // Estilos
    textStyle: {},
    style: {},

    // Texto
    ellipsizeMode: 'tail',
    maxFontSizeMultiplier: 1,
  }) as Required<Properties>;
}

/**
 * Genera las clases CSS del chip basado en sus propiedades
 */
export function getChipClasses(properties: ReturnType<typeof toDefaults>): string {
  const {
    variant,
    disabled,
    elevated,
    selected,
  } = properties;

  return clsx(
    'chip',
    `chip--${variant}`,
    {
      'chip--disabled': disabled,
      'chip--elevated': elevated,
      'chip--selected': selected,
      'chip--has-leading': hasLeadingElement(properties),
    }
  );
}

/**
 * Determina si el chip tiene un elemento leading (icono o avatar)
 */
function hasLeadingElement(properties: ReturnType<typeof toDefaults>): boolean {
  const { variant, icon, avatar } = properties;
  
  // Input chips muestran avatar si existe, sino icono
  if (variant === 'input') {
    return !!(avatar || icon);
  }
  
  // Otros variants solo muestran icono
  return !!icon;
=======
export function toDefaults(properties?: Properties): any {
	return _.defaults(properties, {
		label: '',
		children: null,
		icon: null,
		onPress: _.noop,
		onLongPress: _.noop,
		onChange: _.noop,
		disabled: false,
		elevated: false,
		accessibilityLabel: '',
		density: 'comfortable',
		shape: 'rounded',
		variant: 'assist',
		// Props específicas para filter e input
		selected: false,
		onSelect: _.noop,
		removable: false,
		onRemove: _.noop,
		avatar: null,
	});
}

/**
 * Genera las clases CSS del chip
 */
export function getChipClasses({
	variant,
	density,
	shape,
	disabled,
	elevated,
	selected,
	removable,
}: {
	variant: string;
	density: string;
	shape: string;
	disabled: boolean;
	elevated: boolean;
	selected: boolean;
	removable: boolean;
}): string {
	return clsx(
		'chip',
		`chip--${variant}`,
		`chip--${density}`,
		`chip--${shape}`,
		{
			'chip--disabled': disabled,
			'chip--elevated': elevated,
			'chip--selected': selected,
			'chip--removable': removable,
		}
	);
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
}

/**
 * Determina el contenido del chip basado en children o label.
 */
export function getChipContent(children?: React.ReactNode, label?: string): React.ReactNode {
<<<<<<< HEAD
  return children || label || '';
}

/**
 * Renderiza el elemento leading del chip (avatar o icono)
 */
export function renderLeadingElement({
  variant,
  icon,
  avatar,
}: {
  variant: string;
  icon?: React.ReactNode;
  avatar?: React.ReactNode;
}): React.ReactNode {
  // Para input chips, priorizar avatar sobre icono
  if (variant === 'input' && avatar) {
    return (
      <div className="chip__leading chip__avatar">
        {avatar}
      </div>
    );
  }
  
  // Para todos los variants, mostrar icono si existe
  if (icon) {
    return (
      <div className="chip__leading chip__icon">
        {icon}
      </div>
    );
  }
  
  return null;
}

/**
 * Renderiza el elemento trailing del chip (botón de eliminar)
 */
export function renderTrailingElement({
  closeIcon,
  disabled,
  onClose,
  label,
  closeIconAccessibilityLabel,
}: {
  closeIcon?: React.ReactNode;
  disabled: boolean;
  onClose: () => void;
  label: string;
  closeIconAccessibilityLabel?: string;
}): React.ReactNode {
  if (!onClose) return null;

  // Icono por defecto si no se proporciona closeIcon personalizado
  const defaultCloseIcon = (
    <svg
      className="chip__close-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );

  return (
    <button
      type="button"
      className="chip__trailing chip__close-button"
      onClick={onClose}
      disabled={disabled}
      aria-label={closeIconAccessibilityLabel || `Cerrar ${label}`}
    >
      {closeIcon || defaultCloseIcon}
    </button>
  );
=======
	return children || label;
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
}

/**
 * Maneja el click del chip
 */
export function handleChipClick(
<<<<<<< HEAD
  properties: ReturnType<typeof toDefaults>,
  event: React.MouseEvent
): void {
  const { disabled, onPress } = properties;
  
  if (disabled) return;

  onPress?.(event);
=======
	properties: Properties,
	event: React.MouseEvent
): void {
	if (properties.disabled) return;

	// Llamar callbacks en orden
	properties.onChange?.(event, properties);
	properties.onPress?.(event, properties);

	// Selección para filter/input
	if (properties.variant === 'filter' || properties.variant === 'input') {
		const newSelected = !properties.selected;
		properties.onSelect?.(newSelected, event, properties);
	}
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
}

/**
 * Maneja el long press del chip
 */
export function handleLongPress(
<<<<<<< HEAD
  properties: ReturnType<typeof toDefaults>,
  event: React.MouseEvent
): void {
  const { disabled, onLongPress } = properties;
  
  if (disabled || !onLongPress) return;
  
  onLongPress();
=======
	properties: Properties,
	event: React.MouseEvent
): void {
	if (properties.disabled) return;
	properties.onLongPress?.(event, properties);
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
}

/**
 * Maneja el click del botón remove
 */
<<<<<<< HEAD
export function handleCloseClick(
  properties: ReturnType<typeof toDefaults>,
  event: React.MouseEvent
): void {
  const { disabled, onClose } = properties;
  
  if (disabled) return;
  
  // Prevenir que el evento se propague al chip padre
  event.stopPropagation();
  event.preventDefault();
  
  // Ejecutar callback de remove si existe
  if (onClose) {
    onClose();
  }
}
=======
export function handleRemoveClick(
	properties: Properties,
	event: React.MouseEvent
): void {
	if (properties.disabled) return;
	
	event.stopPropagation();
	
	// Solo llamar onRemove si existe (filter e input chips)
	if ('onRemove' in properties && properties.onRemove) {
		properties.onRemove(event, properties);
	}
}
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
