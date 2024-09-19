import Button from '@/components/button/button.tsx';
import { forwardRef, InputHTMLAttributes, useState } from 'react';
import eyeSlash from '../../assets/icons/eye-slash.svg';
import eye from '../../assets/icons/eye.svg';
import { InputComponent } from '../input-component/input-component';
import styles from './password-input.module.css';

export type Ref = HTMLInputElement;
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = forwardRef<Ref, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center">
      <InputComponent id="password" ref={ref} required type={showPassword ? 'text' : 'password'} {...props} />
      <Button
        type="button"
        className={`px-2 rounded-l-none flex ${styles.switchBtn}`}
        onClick={() => setShowPassword((show) => !show)}>
        <img src={showPassword ? eye : eyeSlash} />
      </Button>
    </div>
  );
});
