import { forwardRef, InputHTMLAttributes, useState } from 'react';
import eyeSlash from '../../assets/icons/eye-slash.svg';
import eye from '../../assets/icons/eye.svg';
import './eye-slash-password.css'

export type Ref = HTMLInputElement;
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = forwardRef<Ref, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-container">
      <input ref={ref} required id="password" type={showPassword ? 'text' : 'password'} {...props} />
      <button className="px-2 switch-btn" id="eye" onClick={() => setShowPassword((show) => !show)} type="button">
        <img src={showPassword ? eye : eyeSlash} />
      </button>
    </div>
  );
});
