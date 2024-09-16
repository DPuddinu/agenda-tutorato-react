import { forwardRef, InputHTMLAttributes } from 'react';
import './input-component.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
}

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(({ variant = 'primary', ...props }, ref) => {
  return <input ref={ref} className={`input ${variant}`} {...props} />;
});
