import React from 'react';
import './toolbar.css';

const ToolBar: React.FC = () => {
  return (
    <nav id="nav" className="flex flex-row space-around py-4">
      <h1 className="text-title">Dashboard</h1>
      <button id="button" className="px-3 py-1  rounded-circle"></button>
    </nav>
  );
};

export default ToolBar;
