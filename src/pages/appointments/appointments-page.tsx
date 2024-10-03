import Button from '@/components/button/button';
import Dialog from '@/components/dialog/appointmentDialog';
import { AppointmentForm } from '@/components/form/appointment-form';
import Layout from '@/components/layout/layout';
import { TableAppointment } from '@/components/table/appointment-table';
import { deleteAppointment, getAppointmentsByAuthorId } from '@/features/auth/api/appointment';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import styles from './appointmentsPage.module.css';

export const AppointmentsPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: getAppointmentsByAuthorId
  });

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.show();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      refetch();
    }
  };

  const deleteMutation = useMutation({
    mutationFn: deleteAppointment,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error('Error deleting appointment:', error);
    }
  });

  const handleDelete = (appointmentId: number) => {
    deleteMutation.mutate(appointmentId);
  };

  return (
    <Layout>
      <div className="flex justify-between py-8 px-8">
        <p className={styles.title}>Dashboard</p>
        <Button className={styles.addAppBtn} onClick={openDialog} />
        <Dialog title="Add New Appointment" onClose={closeDialog} ref={dialogRef}>
          <AppointmentForm onClose={closeDialog} />
        </Dialog>
      </div>
      <div>
        {isLoading && <p>Loading appointments...</p>}
        {error && <p>Error loading appointments</p>}
        {data && <TableAppointment appointments={data.data} onDelete={handleDelete} />}
      </div>
    </Layout>
  );
};
