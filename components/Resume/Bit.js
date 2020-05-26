import React from 'react';

export default function Bit({ label, children }) {
  return (
    <div className="flex flex-col my-2">
      <span className="text-gray-500 uppercase text-xs font-bold uppercase leading-none">{label}</span>
      {children}
    </div>
  );
}
