import React from 'react';
import { Link } from 'react-router-dom';
import '../sides/sides.css';

const Sides: React.FC = ({}) => {
  return (
    <div className="flex flex-col text-center justify-between min-h" id="mainSides">
      <div className="flex flex-col">
        <h2 className="py-8">Menu</h2>
        <nav className="py-7 flex flex-col">
          <Link to="/appointments">Dashboard</Link>
        </nav>
      </div>
      <div className="py-2 px-2">
        <button className="">Logout</button>
      </div>
    </div>
  );
};

export default Sides;
