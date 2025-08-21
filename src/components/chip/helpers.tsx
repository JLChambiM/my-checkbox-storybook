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
		role: 'assist',
		children: '',
		color: 'default',
		variant: 'filled',
		icon: null,
		avatar: null,
		href: null,
		target: null,
		selected: false,
		disabled: false,
		onClick: _.noop,
		onRemove: _.noop,
		onToggle: _.noop,
	}) as Required<Properties>;
}

export function toClasses(properties: Required<Properties>): string {
	const { role, variant, color, disabled, selected, icon } = properties;
	return clsx(
		'chip',
		role,
		variant,
		color,
		{
			selected: selected,
			disabled: disabled,
			icon: icon,
		}
	);
}