import z from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string({ required_error: 'Password is required' })
})
export type LoginPayload = z.infer<typeof LoginFormSchema>;


export const RegisterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string().min(8, 'Confirm Password must be at least 8 characters long').regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@%$£])[A-Za-z\d?!@%$£]+$/,
    'Password must contain at least one letter, one number, one special character'
  ),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], 
});

export type RegisterPayload = z.infer<typeof RegisterFormSchema>;