import React, { useRef } from 'react';
import { Properties } from './types';
import './styles/index.css';
import { toDefaults } from './helpers';

/**
 * Componente Checkbox que sigue las especificaciones Material Design M3
 * 
 * @param properties - Propiedades del checkbox
 * @returns Componente Checkbox
 */

export default function Checkbox(properties?: Properties) {
    const { id, label, checked, disabled, theme, onChange } = toDefaults(properties);

    const inputReference = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(event.target.checked);
      }
    };

    // Manejar el clic en el contenedor (aumenta el área de toque)
    const handleContainerClick = () => {
      if (inputReference.current && !disabled) {
        inputReference.current.click();
      }
    };

    // Clases CSS basadas en el estado y tema
    const containerClass = `wrapper theme-${theme} ${disabled ? 'disabled' : ''}`;

    return (
        <div className={containerClass}>
            <div 
                className="container"
                onClick={handleContainerClick}
                role="presentation"
            >
                <input
                    ref={inputReference}
                    type="checkbox"
                    className="input"
                    checked={checked}
                    onChange={handleChange}
                    id={id}
                    disabled={disabled}
                    aria-checked={checked}
                />
            </div>
            {label && (
                <label 
                    className={`label ${disabled ? 'label-disabled' : ''}`}
                    htmlFor={id}
                    onClick={(event: React.MouseEvent) => {
                        if (disabled) {
                            event.preventDefault();
                        }
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    );
}