import React from 'react';

export const Select = ({ children, ...props }) => (
  <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" {...props}>
    {children}
  </select>
);

export const SelectTrigger = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const SelectValue = ({ placeholder }) => (
  <span>{placeholder}</span>
);

export const SelectContent = ({ children }) => (
  <>{children}</>
);

export const SelectItem = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);