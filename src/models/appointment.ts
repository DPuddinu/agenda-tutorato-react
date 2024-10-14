import { z } from 'zod';

export const AppointmentSchema = z.object({
  authorId: z.number(),
  categoryId: z.number(),
  completed: z.string().optional(),
  creationDate: z.string().pipe(z.coerce.date()),
  description: z.string(),
  updateDate: z.string().pipe(z.coerce.date()),
  id: z.number().optional(),
  dueDate: z.string().pipe(z.coerce.date()).nullish()
});

export type Appointment = z.infer<typeof AppointmentSchema>;

export const AppointmentPayloadSchema = z.object({
  id: z.number().optional(),
  categoryId: z.number(),
  description: z.string().min(1),
  dueDate: z.string().pipe(z.coerce.date()).nullish()
});
export type AppointmentPayload = z.infer<typeof AppointmentPayloadSchema>;
