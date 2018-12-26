import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

export const Asterisk = ({ color = '#37C5FD', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={css(styles.wrapper)}
  >
    <path
      d="M7.83002 1.7L16.19 21.89"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.92001 15.98L22.11 7.61"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.83002 21.89L16.19 1.7"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.92001 7.61L22.11 15.98"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Circle = ({ color = '#0A2A66', size = 15 }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className={css(styles.wrapper)}
  >
    <path
      d="M7.76 12.68C10.7755 12.68 13.22 10.2355 13.22 7.22001C13.22 4.20453 10.7755 1.76001 7.76 1.76001C4.74453 1.76001 2.3 4.20453 2.3 7.22001C2.3 10.2355 4.74453 12.68 7.76 12.68Z"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Diamond = ({ color = '#FFD633', size = 16 }) => (
  <svg
    height={size}
    viewBox="0 0 15 16"
    fill="none"
    className={css(styles.wrapper)}
  >
    <path
      d="M6.83738 2.49354L1.3715 7.95943L6.83738 13.4253L12.3033 7.95943L6.83738 2.49354Z"
      stroke={color}
      strokeWidth="2.732"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const styles = StyleSheet.create({
  wrapper: {
    display: 'block',
  },
});
