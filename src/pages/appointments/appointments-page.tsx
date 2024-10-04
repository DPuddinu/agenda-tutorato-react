import Button from '@/components/button/button';
import Dialog from '@/components/dialog/appointmentDialog';
import Layout from '@/components/layout/layout';
import { AppointmentForm } from '@/features/appointments/form/appointment-form';
import { TableAppointment } from '@/features/appointments/table/appointment-table';
import { deleteAppointment, getAppointmentsByAuthorId } from '@/features/auth/api/appointment';
import { Appointment } from '@/models/appointment';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import styles from './appointmentsPage.module.css';
import { GET_APPOINTMENTS_KEY } from './constants';

export const AppointmentsPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>(undefined);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: GET_APPOINTMENTS_KEY,
    queryFn: getAppointmentsByAuthorId
  });

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setSelectedAppointment(undefined);
    }
  };

  const { mutate: onDelete } = useMutation({
    mutationFn: (id: number) => deleteAppointment(id),
    onSuccess() {
      refetch();
    }
  });

  return (
    <Layout>
      <div className="flex justify-between py-8 px-8">
        <p className={styles.title}>Dashboard</p>
        <Button className={styles.addAppBtn} onClick={openDialog} />
        <Dialog
          title={selectedAppointment ? 'Edit Appointment' : 'Add New Appointment'}
          onClose={closeDialog}
          ref={dialogRef}>
          <AppointmentForm appointment={selectedAppointment} onClose={closeDialog} />
        </Dialog>
      </div>
      <div>
        {isLoading && <p>Loading appointments...</p>}
        {error && <p>Error loading appointments</p>}
        {data && (
          <TableAppointment
            appointments={data.data}
            onEdit={(appointment: Appointment) => {
              setSelectedAppointment(appointment);
              openDialog();
            }}
            onDelete={onDelete}
          />
        )}
      </div>
    </Layout>
  );
};
