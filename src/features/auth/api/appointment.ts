import { api } from '@/core/api';
import { Appointment, AppointmentSchema } from '@/models/appointment';
import { z } from 'zod';

export async function createAppointment(appointmentData: Appointment) {
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
  const data = await response.json();
  const schema = z.object({
    data: AppointmentSchema.array(),
    page: z.number(),
    total: z.number(),
    limit: z.number()
  });

  return schema.parse(data);
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
