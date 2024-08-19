import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { LoginFormSchema, LoginPayload } from '../../features/auth/types/auth.types.ts';
import { login } from '../../features/auth/api/auth';
import styles from '@/styles/common.module.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginPayload>({
    resolver: zodResolver(LoginFormSchema)
  });


  const onSubmit = async (data: LoginPayload) => {
  try {
    await login(data.email, data.password);
    navigate('/dashboard');
  } catch (error) {
    if (error instanceof Error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('An unexpected error occurred.');
    }
  }
};

  return (
    <div className={`${styles['container']} ${styles['form-box']}`}>
      <form
        id="loginForm"
        className={`${styles['flex-col']} ${styles['gap-5']}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login</h2>
        <p className={styles['py-5']}>Enter your email and password to access your account.</p>
        <div className={`${styles.flex} ${styles['flex-col']} ${styles['items-baseline']} ${styles['gap-2']}`}>
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className={styles['width-auto']}
            {...register('email')}
          />
          {errors.email && <span id="errorUser" className={styles.error}>{errors.email.message}</span>}
        </div>
        <div className={`${styles.flex} ${styles['flex-col']} ${styles['items-baseline']} ${styles['gap-2']}`}>
          <label htmlFor="password" className={`${styles.flex} ${styles['gap-2']}`}><strong>Password</strong></label>
          <input
            id="password"
            type="password"
            className={styles['width-auto']}
            {...register('password')}
          />
          {errors.password && <span id="errorPass" className={styles.error}>{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>Sign in</button>
        <div className={`${styles.flex} ${styles['flex-col']} ${styles['signin']} ${styles['items-center']} ${styles['justify-center']} ${styles['border-t-1']} ${styles['pt-1']}`}>
          <p>Don't have an account? <a href="/register" className={styles['font-color-link']}>Register</a>.</p>
        </div>
      </form>
    </div>
  );
};
