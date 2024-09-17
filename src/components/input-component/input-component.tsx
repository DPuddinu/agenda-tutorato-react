import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './input-component.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
}

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(({ variant = 'primary', ...props }, ref) => {
  const variantClass = variant === 'primary' ? styles.inputPrimary : styles.inputSecondary;
  return <input ref={ref} className={`${styles.input} ${variantClass}`} {...props} />;
});
