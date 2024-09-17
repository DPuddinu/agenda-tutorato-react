import React, { forwardRef, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', icon, children, ...props }, ref) => {
  return (
    <button ref={ref} className={`${styles.button} ${styles[variant]}`} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
});

export default Button;
