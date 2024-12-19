import React from 'react';

export const H1 = ({ children, className = '' }) => (
  <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '' }) => (
  <h2 className={`text-3xl text-[#212121] font-bold ${className}`}>{children}</h2>
);

export const H3 = ({ children, className = '' }) => (
  <h3 className={`text-[26px] text-[#212121]   pb-1 font-bold ${className}`}>{children}</h3>
);

export const H4 = ({ children, className = '' }) => (
  <h4 className={`text-xl font-semibold ${className}`}>{children}</h4>
);

export const H5= ({ children, className = '' }) => (
  <h5 className={`text-lg font-medium ${className}`}>{children}</h5>
);

export const H6 = ({ children, className = '' }) => (
  <h6 className={`text-base font-medium ${className}`}>{children}</h6>
);
