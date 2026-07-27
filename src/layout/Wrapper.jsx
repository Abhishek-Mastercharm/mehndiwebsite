import React from 'react';

export const Wrapper = ({ children, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
