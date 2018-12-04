import * as React from 'react';

export const Asterisk = ({ fill, size = 24 }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={fill}>
    <path
      d="M7.83002 1.7L16.19 21.89"
      stroke="#37C5FD"
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.92001 15.98L22.11 7.61"
      stroke="#37C5FD"
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.83002 21.89L16.19 1.7"
      stroke="#37C5FD"
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.92001 7.61L22.11 15.98"
      stroke="#37C5FD"
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
