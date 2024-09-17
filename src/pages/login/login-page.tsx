import { InputComponent } from '@/components/input-component/input-component.tsx';
import { PasswordInput } from '@/components/password-input/password-input.tsx';
import Spinner from '@/components/spinner/spinner.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/api/auth';
import { LoginFormSchema, LoginPayload } from '../../features/auth/types/auth.types.ts';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: LoginPayload) => login(data),
    onSuccess: () => {
      navigate('/dashboard');
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginPayload>({
    resolver: zodResolver(LoginFormSchema)
  });

  const onSubmit = async (data: LoginPayload) => {
    mutate(data);
  };

  return (
    <div className="container form-box">
      <form id="loginForm" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <p className="py-5">Enter your email and password to access your account.</p>
        <div className="w-fit flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              <b>Email</b>
            </label>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="flex gap-2">
              <b>Password</b>
            </label>
            <PasswordInput {...register('password')} />
            {isError && (
              <span id="loginError" className="error">
                Something went wrong!
              </span>
            )}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting || isPending}>
          {isPending ? <Spinner color="current" /> : 'Sign in'}
        </button>
        <div className="flex flex-col signin items-center justify-center border-t-1 pt-1">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="font-color-link">
              Register
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};
