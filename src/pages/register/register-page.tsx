import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { register as registerUser } from '../../features/auth/api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormSchema, RegisterPayload } from '@/features/auth/types/auth.types';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string |null> (null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterPayload>({
    resolver: zodResolver(RegisterFormSchema)
  });

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await registerUser(data.email, data.password, data.confirmPassword);
      navigate('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container form-box">
      <form id="registerForm" className="flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <p className="py-5">Enter your email and password to create your account.</p>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            required
            id="email"
            type="email"
            placeholder="example@email.com"
            className="width-auto"
            {...register('email')}
          />
          {errors.email && (
            <span id="errorUser" className="error">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input required id="password" type="password" className="width-auto" {...register('password')} />
          {errors.password && (
            <span id="errorPass" className="error">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-baseline gap-2">
          <label htmlFor="confirmPassword">
            <strong>Confirm Password</strong>
          </label>
          <input
            required
            id="confirmPassword"
            type="password"
            className="width-auto"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span id="errorConfirmPass" className="error">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
          {errorMessage && <span id="registerError" className="error">{errorMessage}</span>}
        <button className="p-4" type="submit" disabled={isSubmitting}>Sign up</button>
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
