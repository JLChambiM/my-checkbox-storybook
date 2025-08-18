import React, { useRef, useCallback, useLayoutEffect } from 'react';
import { Properties } from './types';
import './styles/index.css';
import { toDefaults, getContainerClass, getLabelClass } from './helpers';

/**
 * 
 * @param properties 
 * @returns
 */
export default function Checkbox(properties?: Properties) {
	const defaults = toDefaults(properties);

	const reference = useRef<HTMLInputElement>(null);

	useLayoutEffect(() => {
		if (!reference.current) return;
		if (reference.current) {
			reference.current.indeterminate = defaults.value === null;
		}
	}, [defaults.value]);

	const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (!defaults.disabled) {
			defaults.onChange?.(event, { ...defaults, value: event.target.checked });
		}
	}, [defaults]);

	const onContainerClickHandler = useCallback(() => {
		if (reference.current && !defaults.disabled) {
			reference.current.click();
		}
	}, [defaults.disabled]);

	const onLabelClickHandler = useCallback((event: React.MouseEvent) => {
		if (defaults.disabled) {
			event.preventDefault();
		}
	}, [defaults.disabled]);

	return (
		<div className={getContainerClass(defaults.variant, defaults.disabled)}>
			<div 
				className="container"
				onClick={onContainerClickHandler}
				role="presentation"
			>
				<input
					ref={reference}
					type="checkbox"
					className="input"
					checked={defaults.value === true}
					onChange={onChangeHandler}
					id={defaults.id}
					disabled={defaults.disabled}
					aria-checked={defaults.value === null ? 'mixed' : defaults.value === true}
				/>
			</div>
			{defaults.children && (
				<label 
					className={getLabelClass(defaults.disabled)}
					htmlFor={defaults.id}
					onClick={onLabelClickHandler}
				>
					{defaults.children}
				</label>
			)}
		</div>
	);
}