import { Appointment } from '@/models/appointment';
import pencil from '../../assets/icons/pencil.svg';
import trashcan from '../../assets/icons/trash-can.svg';

type Props = {
  appointments?: Appointment[];
};
export const TableAppointment = ({ appointments = [] }: Props) => {
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
                <td className="px-4 py-3">{JSON.stringify(appointment.creationDate)}</td>
                <td className="px-4 py-3">{appointment.description}</td>
                <td className="px-4 py-3">{JSON.stringify(appointment.dueDate)}</td>
                <td className="px-4 py-3">{appointment.categoryId}</td>
                <td className="px-4 py-3">{appointment.published ? 'Completed' : 'Pending'}</td>
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
