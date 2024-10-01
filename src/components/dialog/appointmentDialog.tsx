import { forwardRef, ReactNode } from 'react';
import styles from './appointmentDialog.module.css';

interface DialogProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ title, onClose, children }, ref) => {
  return (
    <dialog className={styles.dialog} ref={ref}>
      <div className={styles.header}>
        <h2 className={styles.h2}>{title}</h2>
        <form method="dialog">
          <button type="button" onClick={onClose} className={styles.closeButton}>
            X
          </button>
        </form>
      </div>
      <div className={styles.body}>{children}</div>
    </dialog>
  );
});

export default Dialog;
