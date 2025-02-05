import React from 'react';

export const CircleXIcon = ({
  fill = '#ccc',
  stroke = '#fff',
  strokeWidth = 1.5,
  size = 16,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill={fill} />
      <path
        d="M5 5 L11 11 M11 5 L5 11"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
