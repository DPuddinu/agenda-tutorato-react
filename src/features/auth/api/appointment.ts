import { api } from '@/core/api';

interface AppointmentData {
  description: string;
  creationDate: string;
  updateDate: string;
  dueDate: string;
  categoryID: number;
  authorID: number;
}

interface UpdatedAppointmentData {
  description: string;
  creationDate: string;
  updateDate: string;
  dueDate: string;
  categoryID: number;
  authorID: number;
}

export async function createAppointment(appointmentData: AppointmentData) {
  const response = await api.post('/appointments', {
    method: 'POST',
    body: JSON.stringify(appointmentData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to create appointment!');
  }
  return await response.json();
}

export async function getAppointments() {
  const response = await api.get('/appointments');

  if (!response.ok) {
    throw new Error('Failed to fetch appointments!');
  }
  return await response.json();
}

export async function getAppointmentById(appointmentId: string) {
  const response = await api.get(`/appointments/${appointmentId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch appointment with ID ${appointmentId}!`);
  }
  return await response.json();
}

export async function updateAppointment(appointmentId: string, updatedData: UpdatedAppointmentData) {
  const response = await api.post(`/appointments/${appointmentId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to update appointment with ID ${appointmentId}!`);
  }
  return await response.json();
}

export async function deleteAppointment(appointmentId: string) {
  const response = await api.post(`/appointments/${appointmentId}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error(`Failed to delete appointment with ID ${appointmentId}!`);
  }
  return await response.json();
}
