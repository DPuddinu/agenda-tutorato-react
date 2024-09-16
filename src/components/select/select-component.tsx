import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';
import './select-component.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ variant, children, ...props }, ref) => {
  return (
    <select ref={ref} className={`select ${variant}`} {...props}>
      {children}
    </select>
  );
});

