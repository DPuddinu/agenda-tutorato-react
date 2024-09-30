import { Link } from 'react-router-dom';
import styles from './listMenu.module.css'
export const ListMenu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to={'/dashboard'} >Dashboard</Link>
      </li>
      <li>
        <Link to={'/link2'}>Link2</Link>
      </li>
      <li>
        <a href="#">Link 3</a>
      </li>
      <li>
        <a href="#">Link 4</a>
      </li>
      <li>
        <a href="#">Link 5</a>
      </li>
    </ul>
  );
};
