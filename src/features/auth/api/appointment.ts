import { api } from '@/core/api';
import { Appointment, AppointmentPayload, AppointmentSchema } from '@/models/appointment';
import { z } from 'zod';

export async function createAppointment(appointmentData: AppointmentPayload) {
  const response = await api.post('/appointments', appointmentData);
  if (!response.ok) {
    return {
      status: 'error',
      message: 'Failed to create appointment'
    };
  }
  return await response.json();
}

const schema = z.object({
  data: AppointmentSchema.array(),
  page: z.number(),
  total: z.number(),
  limit: z.number()
});
export type TGetAppointments = z.infer<typeof schema>;
export async function getAppointments(): Promise<TGetAppointments> {
  try {
    const response = await api.get('/appointments');
    const data = await response.json();
    return schema.parse(data);
  } catch (error) {
    console.error('Error parsing appointments data:', error);
    throw error;
  }
}

export type TGetAppointmentsByAuthorId = z.infer<typeof schema>;

export async function getAppointmentsByAuthorId(): Promise<TGetAppointmentsByAuthorId> {
  try {
    const response = await api.get(`/appointments`);
    const data = await response.json();
    return schema.parse(data);
  } catch (error) {
    console.error('Error parsing appointments data for author:', error);
    throw error;
  }
}

export async function getAppointmentById(appointmentId: string) {
  const response = await api.get(`/appointments/${appointmentId}`);

  if (!response.ok) {
    return {
      status: 'error',
      message: `Failed to fetch appointment with ID ${appointmentId}`
    };
  }
  return await response.json();
}

export async function updateAppointment(appointmentId: string, updatedData: Appointment) {
  const response = await api.put(`/appointments/${appointmentId}`, updatedData);

  if (!response.ok) {
    return {
      status: 'error',
      message: `Failed to update appointment with ID ${appointmentId}`
    };
  }
  return await response.json();
}

export async function deleteAppointment(appointmentId: string) {
  const response = await api.delete(`/appointments/${appointmentId}`);

  if (!response.ok) {
    return {
      status: 'error',
      message: `Failed to delete appointment with ID ${appointmentId}`
    };
  }
  return await response.json();
}
