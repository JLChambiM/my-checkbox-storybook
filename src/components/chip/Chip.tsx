import { useRef, useLayoutEffect } from 'react';
import _ from 'lodash';
import type { Properties } from "./types";
import { toDefaults, toClasses } from "./helpers";
import "./styles/index.css";

// Ícono simple para el botón de eliminación
const Icon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
	</svg>
);

export default function Chip(properties?: Properties) {
	const defaults = toDefaults(properties);
	const reference = useRef<HTMLButtonElement>(null);
	
	useLayoutEffect(() => {
		if (!reference.current) return;
		if (defaults.disabled) {reference.current.setAttribute('aria-disabled', 'true');}
		if (defaults.selected) {reference.current.setAttribute('aria-pressed', 'true');}	
	}, [defaults.disabled, defaults.selected]);
	
	return (
		<button
			ref={reference}
			className={toClasses(defaults)}
			disabled={defaults.disabled}
			type="button"
			onClick={(event) => {
				if (defaults.disabled) return;
				if (defaults.variant === 'filter' && defaults.onToggle !== _.noop) {
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
			{defaults.variant === 'input' && defaults.onRemove !== _.noop && (
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
					<Icon/>
				</button>
			)}
		</button>
	);
}
