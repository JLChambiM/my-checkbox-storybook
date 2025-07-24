import React, { useMemo } from 'react';
import type { Properties } from './types';
import { toDefaults, toClasses } from './helpers';

export default function Chip(properties?: Properties) {
  const defaults = toDefaults(properties);

  // Memoize class calculation for performance
  const chipClasses = useMemo(
    () => toClasses(defaults),
    [defaults]
  );

  // Handle click/toggle based on variant
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (defaults.disabled) return;
    if (defaults.variant === 'filter') {
      defaults.onToggle?.(!defaults.selected);
    } else {
      defaults.onClick?.(event);
    }
  };

  // Handle remove for input chips
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (defaults.disabled) return;
    defaults.onRemove?.(event);
  };

  return (
    <div
      className={chipClasses}
      onClick={handleClick}
      aria-disabled={defaults.disabled}
      aria-selected={defaults.variant === 'filter' ? defaults.selected : undefined}
      role={defaults.variant === 'filter' ? 'checkbox' : 'button'}
      tabIndex={defaults.disabled ? -1 : 0}
    >
      {defaults.avatar && <div className="chip__avatar">{defaults.avatar}</div>}
      {!defaults.avatar && defaults.icon && <div className="chip__icon">{defaults.icon}</div>}
      <span className="chip__content">{defaults.children}</span>
      {defaults.variant === 'input' && properties?.onRemove && (
        <button
          className="chip__remove"
          onClick={handleRemove}
          disabled={defaults.disabled}
          aria-label="Remove chip"
          tabIndex={defaults.disabled ? -1 : 0}
        >
          &times;
        </button>
      )}
    </div>
  );
}
