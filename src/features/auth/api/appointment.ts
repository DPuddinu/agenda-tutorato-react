import { api } from '@/core/api';
import { z } from 'zod';

const appointmentSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  creationDate: z.string(),
  updateDate: z.string(),
  dueDate: z.string().optional().nullable(),
  categoryId: z.number().int().optional(),
  authorId: z.number().int().optional()
});

type AppointmentData = z.infer<typeof appointmentSchema>;

export async function createAppointment(appointmentData: AppointmentData) {
  const response = await api.post('/appointments', appointmentData);

  if (!response.ok) {
    return {
      status: 'error',
      message: 'Failed to create appointment'
    };
  }
  return await response.json();
}

export async function getAppointments() {
  const response = await api.get('/appointments');

  if (!response.ok) {
    return {
      status: 'error',
      message: 'Failed to fetch appointments'
    };
  }
  return await response.json();
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

export async function updateAppointment(appointmentId: string, updatedData: AppointmentData) {
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
