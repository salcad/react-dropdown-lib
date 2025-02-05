import React from 'react';

export const ArrowIcon = ({ className = '', isOpen = false }) => {
  return (
    <svg
      className={`${className} ${isOpen ? 'dropdown__icon--open' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
