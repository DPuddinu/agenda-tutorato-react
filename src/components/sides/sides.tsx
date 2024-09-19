import { Link } from 'react-router-dom';
import styles from './sides.module.css';

const Sides = () => {
  return (
    <div className={`flex flex-col text-center justify-between min-h ${styles.mainSides}`}>
      <div className="flex flex-col">
        <h2 className={`py-8 ${styles.h2}`}>Menu</h2>
        <nav className={`py-7 flex flex-col ${styles.nav}`}>
          <Link to="/appointments" className={styles.a}>
            Dashboard
          </Link>
        </nav>
      </div>
      <div className="py-2 px-2">
        <button className={styles.button}>Logout</button>
      </div>
    </div>
  );
};

export default Sides;
