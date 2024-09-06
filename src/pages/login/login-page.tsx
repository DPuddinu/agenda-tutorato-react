import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/api/auth';
import { LoginFormSchema, LoginPayload } from '../../features/auth/types/auth.types.ts';
import './login.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginPayload>({
    resolver: zodResolver(LoginFormSchema)
  });

  const onSubmit = async (data: LoginPayload) => {
    try {
      const res = await login(data);
      if(res.status === 'success') {
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
    <div className="container form-box">
      <form id="loginForm" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <p className="py-5">Enter your email and password to access your account.</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input required id="email" type="email" placeholder="example@email.com" {...register('email')} />
          {errors.email && (
            <span id="errorUser" className="error">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex gap-2">
            <b>Password</b>
          </label>
          <input required id="password" type="password" {...register('password')} />
          {errors.password && (
            <span id="errorPass" className="error">
              {errors.password.message}
            </span>
          )}
          {errorMessage && (
            <span id="loginError" className="error">
              {errorMessage}
            </span>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Sign in
        </button>
        <div className="pt-1 ">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/register" className="font-color-link">
              <b>Register</b>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
