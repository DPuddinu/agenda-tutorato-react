import React from 'react';
import '../styles/spinner-component.css';
// import '@/styles/common.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
