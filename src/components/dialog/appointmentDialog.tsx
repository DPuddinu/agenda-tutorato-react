import { ReactNode } from 'react';
import styles from './appointmentDialog.module.css';

interface DialogProps {
  title: string;
  isOpen: boolean; 
  onClose: () => void;
  children: ReactNode;
}

const Dialog = ({ title, isOpen, onClose, children }: DialogProps) => {
  return (
    <dialog open={isOpen} className={styles.dialog} onClose={onClose}>
      <div className={styles.header}>
        <h2 className={styles.h2}>{title}</h2>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </dialog>
  );
};

export default Dialog;
