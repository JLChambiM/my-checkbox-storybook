import { useRef, useLayoutEffect } from 'react';
import _ from 'lodash';

import type { Properties } from "./types";
import { toDefaults, toClasses } from "./helpers";
import { Icon } from '../icon/index';
import "./styles/index.css";

export default function Chip(properties?: Properties) {
	const defaults = toDefaults(properties);
	const reference = useRef<HTMLSpanElement>(null);
	
	useLayoutEffect(() => {
		if (!reference.current) return;
		if (defaults.disabled) {reference.current.setAttribute('aria-disabled', 'true');}
		if (defaults.selected) {reference.current.setAttribute('aria-pressed', 'true');}	
	}, [defaults.disabled, defaults.selected]);
	
	return (
		<span
			ref={reference}
			className={toClasses(defaults)}
			tabIndex={0}
			onClick={(event) => {
				if (defaults.disabled) return;
				if (defaults.role === 'filter' && defaults.onToggle !== _.noop) {
					defaults.onToggle(event, !defaults.selected, defaults);
				} else {
					defaults.onClick(event, defaults);
				}
			}}
		>
			{/* Avatar o Icono */}
			{defaults.avatar && (
				<span className="chip__avatar">
					{defaults.avatar}
				</span>
			)}
			
			{!defaults.avatar && defaults.icon && (
				<span className="chip__icon">
					{defaults.icon}
				</span>
			)}

			{/* Contenido principal */}
			<span className="chip__content">
				{defaults.children}
			</span>
			
			{/* Botón de eliminación para input chips */}
			{defaults.role === 'input' && defaults.onRemove !== _.noop && (
				<button
					className="chip__remove"
					type="button"
					onClick={(event) => {
						event.stopPropagation();
						if (defaults.disabled) return;
						defaults.onRemove(event, defaults);
					}}
					disabled={defaults.disabled}
					aria-label="Remove"
				>
					<Icon 
						name="close"
					/>
				</button>
			)}
		</span>
	);
}
