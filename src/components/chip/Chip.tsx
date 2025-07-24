import React from 'react';
<<<<<<< HEAD
import type { ChipProps } from './types';
import {
  validateChipProps,
  getChipClassNames,
  getChipStyles,
  shouldShowCheckIcon,
} from './helpers';

export const Chip: React.FC<ChipProps> = (props) => {
  const {
    children,
    icon,
    avatar,
    closeIcon,
    onClose,
    accessibilityLabel,
    closeIconAccessibilityLabel,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    testID,
    ellipsizeMode,
    textStyle,
    onClick, // fallback custom handler if needed
  } = props;

  // Validar conflictos en props (ej. icon + avatar)
  validateChipProps(props);

  // Clases dinámicas con helpers
  const className = getChipClassNames(props);
  const style = getChipStyles(props);
  const showCheck = shouldShowCheckIcon(props);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!props.disabled && onPress) {
      onPress(e);
    }
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose?.();
=======
import type { Properties } from './types';
import { toDefaults, getChipClasses, getChipContent, handleChipClick, handleLongPress, handleRemoveClick } from './helpers';
import './styles/index.css';

/**
 * Componente Chip que representa diferentes tipos de chips según Material Design 3.
 * Soporta variants: assist, filter, input, suggestion
 */
export default function Chip(properties?: Properties) {
  const defaults = toDefaults(properties);
  // Desestructuramos todos los props necesarios desde defaults
  const {
    variant,
    density,
    shape,
    disabled,
    elevated,
    selected,
    removable,
    icon,
    avatar,
    label,
    children,
    accessibilityLabel,
  } = defaults;

  // Determinar el contenido del chip
  const content = getChipContent(children, label);

  // Clases CSS dinámicas
  const chipClasses = getChipClasses({
    variant,
    density,
    shape,
    disabled,
    elevated,
    selected,
    removable,
  });

  // Manejar eventos usando helpers
  const handleClick = (event: React.MouseEvent) => {
    handleChipClick(defaults, event);
  };

  const handleLongPressEvent = (event: React.MouseEvent) => {
    handleLongPress(defaults, event);
  };

  const handleRemove = (event: React.MouseEvent) => {
    handleRemoveClick(defaults, event);
>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
  };

  return (
    <div
<<<<<<< HEAD
      role="button"
      aria-label={accessibilityLabel}
      className={className}
      style={style}
      onClick={handleClick}
      onMouseDown={onPressIn}
      onMouseUp={onPressOut}
      onDoubleClick={onLongPress}
      data-testid={testID}
    >
      {/* Icono o avatar al inicio */}
      {avatar && <span className="chip__avatar">{avatar}</span>}
      {!avatar && icon && <span className="chip__icon">{icon}</span>}

      {/* Etiqueta o texto */}
      <span
        className="chip__label"
        style={{
          ...textStyle,
          textOverflow: ellipsizeMode === 'clip' ? 'clip' : 'ellipsis',
        }}
      >
        {children}
      </span>

      {/* Check cuando está seleccionado */}
      {showCheck && <span className="chip__check">✔</span>}

      {/* Botón de cerrar */}
      {onClose && (
        <button
          className="chip__close"
          aria-label={closeIconAccessibilityLabel}
          onClick={handleCloseClick}
        >
          {closeIcon || '×'}
        </button>
      )}

      {/* Overlay para chips seleccionados si está activo */}
      {props.showSelectedOverlay && props.selected && (
        <span className="chip__overlay" />
      )}
    </div>
  );
};
=======
      className={chipClasses}
      role={variant === 'filter' || variant === 'input' ? 'checkbox' : 'button'}
      aria-checked={variant === 'filter' || variant === 'input' ? selected : undefined}
      aria-label={accessibilityLabel || label}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onMouseDown={handleLongPressEvent}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleClick(event as any);
        }
      }}
    >
      {/* Renderizar avatar solo si es input chip y existe avatar */}
      {variant === 'input' && avatar && (
        <div className="chip__avatar">
          {avatar}
        </div>
      )}
      {/* Renderizar icono si existe */}
      {icon && (
        <div className="chip__icon">
          {icon}
        </div>
      )}
      <span className="chip__content">
        {content}
      </span>
      {/* Renderizar botón de eliminar si es removible */}
      {removable && (
        <button
          type="button"
          className="chip__remove-button"
          onClick={handleRemove}
          disabled={disabled}
          aria-label={`Eliminar ${label || 'chip'}`}
        >
          {/* El icono de eliminar puede ser un prop en el futuro, por ahora SVG fijo */}
          <svg
            className="chip__remove-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
}

>>>>>>> 18e16d1aa108978dd7cfa037a1f1bbae2f5376c7
