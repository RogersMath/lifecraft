import React from 'react';

export const Progress = ({ value, className, ...props }) => (
  <div className={`w-full bg-gray-200 rounded ${className}`} {...props}>
    <div
      className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
      style={{ width: `${value}%` }}
    >
      {value}%
    </div>
  </div>
);