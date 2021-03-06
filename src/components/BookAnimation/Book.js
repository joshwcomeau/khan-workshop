import * as React from 'react';

const Book = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 154 119"
      fill="none"
      style={{ display: 'block' }}
    >
      <g clipPath="url(#book-clip)">
        <path
          d="M150.99 9.21H92.25C83.69 9.21 76.75 16.15 76.75 24.71C76.75 16.15 69.81 9.21 61.25 9.21H2.51C1.12 9.21 0 10.33 0 11.71V112.61C0 113.99 1.12 115.12 2.51 115.12H64.35C65.42 116.91 67.36 118.12 69.6 118.12H84.34C86.58 118.12 88.52 116.91 89.59 115.12H151C152.38 115.12 153.51 114 153.51 112.61V11.71C153.5 10.33 152.38 9.21 150.99 9.21Z"
          fill="#0A2A66"
        />
        <path
          d="M82.48 112.11H71.45C69.4 112.11 67.74 110.45 67.74 108.4V30.64H86.18V108.4C86.18 110.45 84.52 112.11 82.48 112.11Z"
          fill="#93DBF7"
        />
        <path
          d="M92.13 2.77C83.64 2.77 76.76 9.65 76.76 18.15C76.76 9.66 69.88 2.77 61.38 2.77H6.42999V108.68H76.75H147.07V2.77H92.13Z"
          fill="#C3EEFE"
        />
        <path
          d="M18.91 64.35H64.87"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M18.91 78.91H64.87"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M86.18 20.68H132.15"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M86.18 35.24H132.15"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M86.18 49.79H132.15"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M86.18 64.35H132.15"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M86.18 78.91H132.15"
          stroke="#93DBF7"
          strokeWidth="2.1369"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M76.75 108.81H6.42999V98.52H66.33C72.08 98.52 76.74 103.18 76.74 108.93V108.81H76.75Z"
          fill="#93DBF7"
        />
        <path
          d="M147.07 108.81H76.75V108.93C76.75 103.18 81.41 98.52 87.16 98.52H147.06V108.81H147.07Z"
          fill="#93DBF7"
        />
        <path
          d="M123.74 66.83L117.91 61.25L112.26 66.83V0H123.74V66.83Z"
          fill="#FB73BE"
        />
        <path d="M64.88 20.68H18.91V49.79H64.88V20.68Z" fill="#93DBF7" />
      </g>

      <defs>
        <clipPath id="book-clip">
          <rect width="153.5" height="118.11" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Book;
