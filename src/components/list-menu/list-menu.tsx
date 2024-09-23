import styles from './listMenu.module.css'
export const ListMenu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Link 2</a>
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
