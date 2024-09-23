import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import styles from './logout.module.css';

export const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN);
    navigate('/');
  };
  return (
    <Button className={styles.btnLogout} onClick={logout}>
      Logout
    </Button>
  );
};
