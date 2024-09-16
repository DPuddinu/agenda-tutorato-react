import { forwardRef, InputHTMLAttributes, useState } from 'react';
import eyeSlash from '../../assets/icons/eye-slash.svg';
import eye from '../../assets/icons/eye.svg';
import Button from '../../components/button/button.tsx';
import { InputComponent } from '../input-component/input-component';
import './password-input.css';

export type Ref = HTMLInputElement;
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = forwardRef<Ref, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-container ">
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
        className="px-2 switch-btn"
        id="eye"
        onClick={() => setShowPassword((show) => !show)}
        type="button">
        <img src={showPassword ? eye : eyeSlash} />
      </Button>
    </div>
  );
});
