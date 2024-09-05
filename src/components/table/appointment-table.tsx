import React from 'react';
import pencil from '../assets/icons/pencil.svg';
import trashcan from '../assets/icons/trash-can.svg';

export const TableAppointment: React.FC = () => {
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
            <tr className="border-b ">
              <td className="px-4 py-3">2023-05-15 9:00 AM</td>
              <td className="px-4 py-3">Dentist</td>
              <td className="px-4 py-3">Optional</td>
              <td className="px-4 py-3">Job</td>
              <td className="px-4 py-3">Completed</td>
              <td className="px-4 py-3">
                <img src={pencil} className="icon"></img>
              </td>
              <td className="px-4 py-3">
                <img src={trashcan} className="icon"></img>
              </td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-3">2023-05-15 10:00 AM</td>
              <td className="px-4 py-3">Gym</td>
              <td className="px-4 py-3">Optional</td>
              <td className="px-4 py-3">Job</td>
              <td className="px-4 py-3">Completed</td>
              <td className="px-4 py-3">
                <img src={pencil} className="icon"></img>
              </td>
              <td className="px-4 py-3">
                <img src={trashcan} className="icon"></img>
              </td>
            </tr>
            <tr className="border-b ">
              <td className="px-4 py-3">2023-05-15 11:00 AM</td>
              <td className="px-4 py-3">Call</td>
              <td className="px-4 py-3">Optional</td>
              <td className="px-4 py-3">Job</td>
              <td className="px-4 py-3">Completed</td>
              <td className="px-4 py-3">
                <img src={pencil} className="icon"></img>
              </td>
              <td className="px-4 py-3">
                <img src={trashcan} className="icon"></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
