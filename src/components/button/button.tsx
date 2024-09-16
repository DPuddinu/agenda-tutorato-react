import React, { forwardRef, ReactNode } from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', icon, children, ...props }, ref) => {
  return (
    <button ref={ref} className={`button ${variant}`} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
});

export default Button;
