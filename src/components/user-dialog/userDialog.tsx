import styles from './userDialog.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserDialog = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Account Information</h2>
        <p>This is your account modal.</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDialog;
