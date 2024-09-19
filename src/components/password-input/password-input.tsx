import { forwardRef, InputHTMLAttributes, useState } from 'react';
import eyeSlash from '../../assets/icons/eye-slash.svg';
import eye from '../../assets/icons/eye.svg';
import Button from '../../components/button/button.tsx';
import { InputComponent } from '../input-component/input-component';
import styles from './eye-slash-password.module.css';

export type Ref = HTMLInputElement;
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = forwardRef<Ref, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <InputComponent
        variant="primary"
        ref={ref}
        required
        id="password"
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <Button
        variant="primary"
        className={`px-2 ${styles.switchBtn}`}
        id="eye"
        onClick={() => setShowPassword((show) => !show)}
        type="button">
        <img src={showPassword ? eye : eyeSlash} />
      </Button>
    </div>
  );
});
