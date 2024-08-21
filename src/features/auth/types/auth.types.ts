import z from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string({ required_error: 'Password is required' })
  .min(8, 'Password must be more than 8 characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!@%$£])[A-Za-z\d?!@%$£]+$/,
    'Password must contain at least one letter, one number, one special character'
  )
})
export type LoginPayload = z.infer<typeof LoginFormSchema>;


export const RegisterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Path che viene utilizzato per segnalare l'errore
});

export type RegisterPayload = z.infer<typeof RegisterFormSchema>;