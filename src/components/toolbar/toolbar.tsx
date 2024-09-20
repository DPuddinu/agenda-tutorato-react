import styles from './toolbar.module.css';

interface ToolBarProps {
  onNewAppointmentClick: () => void;
}

const ToolBar = ({ onNewAppointmentClick }: ToolBarProps) => {
  return (
    <nav id="nav" className={styles.toolbar}>
      <h1 className="text-title">Dashboard</h1>
      <button id="button" className="px-3 py-1 rounded-circle" onClick={onNewAppointmentClick}></button>
    </nav>
  );
};

export default ToolBar;
