import _ from 'lodash';
import clsx from 'clsx';

import type { Properties } from './types';

/**
 * 
 * @param properties
 * @returns
 */
export function toDefaults(properties?: Properties): Required<Properties> {
	return _.defaults({}, properties, {
		children: '',
		variant: 'assist',
		mode: 'flat',
		icon: null,
		avatar: null,
		selected: false,
		disabled: false,
		elevated: false,
		onClick: _.noop,
		onRemove: _.noop,
		onToggle: _.noop,
	}) as Required<Properties>;
}

export function toClasses(properties: Required<Properties>): string {
	const { variant, mode, disabled, elevated, selected } = properties;
	return clsx(
		'chip',
		`chip--${variant}`,
		`chip--${mode}`,
		{
			'chip--selected': selected,
			'chip--disabled': disabled,
			'chip--elevated': elevated,
		}
	);
}