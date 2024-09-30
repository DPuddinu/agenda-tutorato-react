import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import styles from './appointmentDialog.module.css';

export type DialogRef = {
  open: () => void;
  close: () => void;
};

interface DialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Dialog = forwardRef<DialogRef, DialogProps>(({ title, onClose, children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      dialogRef.current?.close();
    }
  }));

  const handleDialogClose = () => {
    onClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClose={handleDialogClose}>
      <div className={styles.header}>
        <h2 className={styles.h2}>{title}</h2>
        <button onClick={() => dialogRef.current?.close()} className={styles.closeButton}>
          X
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </dialog>
  );
});

export default Dialog;
