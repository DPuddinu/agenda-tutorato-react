import { InputComponent } from '@/components/input-component/input-component';
import { PasswordInput } from '@/components/password-input/password-input';
import { RegisterFormSchema, RegisterPayload } from '@/features/auth/types/auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.tsx';
import { register as registerUser } from '../../features/auth/api/auth';
import styles from './register.module.css'

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterPayload>({
    resolver: zodResolver(RegisterFormSchema)
  });

  const onSubmit = async (data: RegisterPayload) => {
    try {
      const res = await registerUser(data);
      if (res.status === 'success') {
        navigate('/dashboard');
      } else {
        setErrorMessage('Something went wrong!');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container flex justify-center muted items-center grow form-box">
      <form
        id="registerForm"
        className="flex shadow p-5 rounded bg-white flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <p className="py-5">Enter your email and password to create your account.</p>
        <div className="w-fit flex flex-col gap-4">
          <div className="flex flex-col items-baseline gap-2">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <div className={styles.inputContainer}>
              <InputComponent
                variant="primary"
                required
                id="email"
                type="email"
                placeholder="example@email.com"
                {...register('email')}
              />
              {errors.email && (
                <span id="errorUser" className="error">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="flex gap-2">
              <b>Password</b>
            </label>
            <div className={styles.inputContainer}>
              <PasswordInput {...register('password')} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">
              <strong>Confirm Password</strong>
            </label>
            {errors.password && (
              <span id="errorPass" className="error">
                {errors.password.message}
              </span>
            )}
            <div className={styles.inputContainer}>
              <PasswordInput {...register('confirmPassword')} />
            </div>
            {errors.confirmPassword && (
              <span id="errorConfirmPass" className="error">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>
        <div className="pt-1">
          {errorMessage && (
            <span id="registerError" className="error">
              {errorMessage}
            </span>
          )}
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Sign up
          </Button>
        </div>
        <div className="flex flex-col signin items-center justify-center border-t-1 pt-1">
          <p>
            Have an account?{' '}
            <a href="/login" className="font-color-link">
              Login
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};
