import React from 'react';

const Icon: React.FC<{ name?: string; className?: string }> = ({ name = '⭐', className }) => (
  <span className={className} role="img" aria-label={name}>
    {name}
  </span>
);

export default Icon;
