import { Appointment } from '@/models/appointment';
import pencil from '../../assets/icons/pencil.svg';
import trashcan from '../../assets/icons/trash-can.svg';
import styles from './appointmentTable.module.css';

type Props = {
  appointments: Appointment[];
};

const formatDate = (date: Date | null) => {
  if (!date) {
    return 'N/A';
  }
  const formattedDate = new Date(date).toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return formattedDate;
};

export const TableAppointment = ({ appointments }: Props) => {
  if (!appointments || appointments.length === 0) {
    return <p>No appointments available.</p>;
  }

  return (
    <div className={styles.wrapperTable}>
      <div className={styles.scrollContainer}>
        <table className="w-full">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Creation Date</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Due Date</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Edit</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="px-4 py-3">{formatDate(appointment.creationDate)}</td>
                <td className="px-4 py-3">{appointment.description}</td>
                <td className="px-4 py-3">{formatDate(appointment.dueDate)}</td>
                <td className="px-4 py-3">{appointment.categoryId}</td>
                <td className="px-4 py-3">
                  <img src={pencil} className="icon" alt="Edit" />
                </td>
                <td className="px-4 py-3">{appointment.completed === 'true' ? 'Completed' : 'Pending'}</td>
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
