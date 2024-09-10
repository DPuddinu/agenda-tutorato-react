import React, { useEffect, useState } from 'react';
import pencil from '../../assets/icons/pencil.svg';
import trashcan from '../../assets/icons/trash-can.svg';
import { getAppointments } from '../../features/auth/api/appointment';

interface Appointment {
  id: string;
  creationDate: string;
  description: string;
  dueDate: string;
  category: string;
  completed: boolean;
}

export const TableAppointment: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      const result = await getAppointments();

      if (result.status === 'error') {
        setError(result.message);
      } else {
        setAppointments(result);
      }
    };

    fetchAppointments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="background text-foreground rounded shadow-md">
      <div className="flex items-center justify-between p-4 border-b border-t">
        <h2 className="text-xl font-semibold">Appointments</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="muted text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Creation Date</th>
              <th className="px-4 py-3 text-left font-medium">Description</th>
              <th className="px-4 py-3 text-left font-medium">Due Date</th>
              <th className="px-4 py-3 text-left font-medium">Category</th>
              <th className="px-4 py-3 text-left font-medium">Completed</th>
              <th className="px-4 py-3 text-left font-medium">Edit</th>
              <th className="px-4 py-3 text-left font-medium">Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="px-4 py-3">{appointment.creationDate}</td>
                <td className="px-4 py-3">{appointment.description}</td>
                <td className="px-4 py-3">{appointment.dueDate}</td>
                <td className="px-4 py-3">{appointment.category}</td>
                <td className="px-4 py-3">{appointment.completed ? 'Completed' : 'Pending'}</td>
                <td className="px-4 py-3">
                  <img src={pencil} className="icon" alt="Edit" />
                </td>
                <td className="px-4 py-3">
                  <img src={trashcan} className="icon" alt="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
