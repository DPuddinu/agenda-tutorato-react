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