import _ from 'lodash';
import clsx from 'clsx';
import { Properties } from './types';

/**
 * Generates a unique ID for checkbox
 * @returns {string} A unique checkbox ID
 */
export const generateId = (): string => {
	return `checkbox-${Math.random().toString(36).slice(2, 9)}`;
};

/**
 * Converts partial properties to complete properties with defaults
 * @param properties - Partial properties
 * @returns {Required<Properties>} Complete properties with defaults
 */
export function toDefaults(properties?: Properties): Required<Properties> {
	return _.defaults({}, properties, {
		id: generateId(),
		label: '',
		checked: false,
		indeterminate: false,
		disabled: false,
		theme: 'primary',
		onChange: _.noop,
	}) as Required<Properties>;
}

/**
 * Gets CSS classes for the container element
 * @param theme - Theme name
 * @param disabled - Whether checkbox is disabled
 * @param indeterminate - Whether checkbox is in indeterminate state
 * @returns {string} CSS class names
 */
export function getContainerClass(theme: string, disabled: boolean, indeterminate: boolean): string {
	return clsx(
		'wrapper',
		`theme-${theme}`,
		{
			disabled,
			indeterminate
		}
	);
}

/**
 * Gets CSS classes for the label element
 * @param disabled - Whether checkbox is disabled
 * @returns {string} CSS class names
 */
export function getLabelClass(disabled: boolean): string {
	return clsx(
		'label',
		{
			'label-disabled': disabled
		}
	);
}