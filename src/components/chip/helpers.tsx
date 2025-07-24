import _ from 'lodash';
import clsx from 'clsx';
import React from 'react';
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

    'aria-label':"",

    // Eventos
    onClick: () => {},
    onRemove: () => {},
    onToggle: () => {},
  }) as Required<Properties>;
}

/**
 * Genera las clases CSS del chip basado en sus propiedades
 */

