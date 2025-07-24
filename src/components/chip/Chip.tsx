import React from 'react';
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
  };

  return (
    <div
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
