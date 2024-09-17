import { z } from 'zod';

export const AppointmentSchema = z.object({
  id: z.number().optional(),
  published: z.boolean(),
  categoryId: z.number(),
  description: z.string().min(1),
  creationDate: z.string().pipe(z.coerce.date()),
  updateDate: z.string().pipe(z.coerce.date()),
  dueDate: z.string().pipe(z.coerce.date()).nullish(),
  authorId: z.number()
});
export type Appointment = z.infer<typeof AppointmentSchema>;


export const AppointmentPayloadSchema = z.object({
  id: z.number().optional(),
  categoryId: z.number(),
  description: z.string().min(1),
  dueDate: z.string().pipe(z.coerce.date())
});
export type AppointmentPayload = z.infer<typeof AppointmentPayloadSchema>;
