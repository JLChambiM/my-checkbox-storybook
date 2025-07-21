import _ from 'lodash';
import clsx from 'clsx';
import type { Properties } from './types';

/**
 * Devuelve las propiedades del chip con valores por defecto según la variante.
 * @param properties - Propiedades del chip
 * @returns Propiedades completas con valores por defecto
 */
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
}

/**
 * Determina el contenido del chip basado en children o label.
 */
export function getChipContent(children?: React.ReactNode, label?: string): React.ReactNode {
	return children || label;
}

/**
 * Maneja el click del chip
 */
export function handleChipClick(
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
}

/**
 * Maneja el long press del chip
 */
export function handleLongPress(
	properties: Properties,
	event: React.MouseEvent
): void {
	if (properties.disabled) return;
	properties.onLongPress?.(event, properties);
}

/**
 * Maneja el click del botón remove
 */
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
