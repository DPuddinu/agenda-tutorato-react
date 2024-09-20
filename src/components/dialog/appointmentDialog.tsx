import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
    },
    close() {
      setIsOpen(false);
      onClose();
    }
  }));

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
            X
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
});

export default Dialog;
