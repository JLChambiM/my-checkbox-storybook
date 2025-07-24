import _ from 'lodash';
import clsx from 'clsx';
import type { Properties } from './types';

/**
 * Devuelve las propiedades del chip con valores por defecto según la variante.
 * @param properties - Propiedades del chip
 * @returns Propiedades completas con valores por defecto
 */
export function toDefaults(properties?: Properties): Required<Properties> {
  return _.defaults({}, properties, {
    // Variante y modo
    variant: 'assist',
    mode: 'flat',

    // Contenido
    children: '',
    icon: null,
    avatar: null,

    // Estados y apariencia
    selected: false,
    disabled: false,
    elevated: false,

    // Eventos
    onClick: () => {},
    onRemove: () => {},
    onToggle: () => {},
  }) as Required<Properties>;
}

/**
 * Genera las clases CSS del chip basado en sus propiedades
 */
export function toClasses(properties: Required<Properties>): string {
  const { variant, mode, selected, disabled, elevated } = properties;

  return clsx(
    'chip', // Clase base para todos los chips
    `chip--${variant}`, // Clase para la variante (assist, filter, input, suggestion)
    `chip--${mode}`, // Clase para el modo (flat, outlined)
    {
      'chip--selected': selected, // Clase si está seleccionado
      'chip--disabled': disabled, // Clase si está deshabilitado
      'chip--elevated': elevated, // Clase si está elevado
    }
  );
}