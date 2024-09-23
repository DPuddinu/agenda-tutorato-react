import React, { forwardRef, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', icon, children, ...props }, ref) => {
  const { className } = props;

  return (
    <button ref={ref} {...props} className={`${styles.button} ${styles[variant]} ${className}`}>
      {icon ? (
        <div className="flex items-center">
          {icon} {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;
