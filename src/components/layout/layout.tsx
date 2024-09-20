import { useRef } from 'react';
import Sides from '../sides/sides';
import { TableAppointment } from '../table/appointment-table';
import ToolBar from '../toolbar/toolbar';
import Dialog, { DialogRef } from '../dialog/appointmentDialog'; 
import { AppointmentForm } from '../form/appointment-form';

const Layout = () => {
  const dialogRef = useRef<DialogRef>(null);

  const handleOpenDialog = () => {
    dialogRef.current?.open();
  };

  const handleCloseDialog = () => {
    console.log('Dialog closed');
  };

  return (
    <>
      <header>
        <ToolBar onNewAppointmentClick={handleOpenDialog} />
      </header>
      <main>
        <TableAppointment />
        <Sides />

        <Dialog ref={dialogRef} title="New Appointment" onClose={handleCloseDialog}>
          <AppointmentForm/>
        </Dialog>
      </main>
    </>
  );
};

export default Layout;
