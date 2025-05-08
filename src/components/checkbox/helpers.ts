import _ from 'lodash';
import { Properties } from './types';

/**
 * Genera un ID único para el checkbox
 * @returns Un ID único con prefijo 'checkbox-'
 */
export const generateId = (): string => {
  return `checkbox-${Math.random().toString(36).slice(2, 9)}`;
};

/**
 * Aplica valores predeterminados a las propiedades del checkbox
 * @param properties Propiedades opcionales del checkbox
 * @returns Propiedades del checkbox con valores predeterminados aplicados
 */
export function toDefaults(properties?: Properties): Required<Properties> {
  return _.defaults({}, properties, {
    id: generateId(),
    label: '',
    checked: false,
    disabled: false,
    theme: 'primary',
    onChange: _.noop,
  }) as Required<Properties>;
}