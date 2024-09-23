import React from 'react';
import menu from '../../assets/icons/menu.svg';
import Button from '../button/button';
import { ListMenu } from '../list-menu/list-menu';
import { Logout } from '../logout-button/logout';
import styles from './sides.module.css';

interface SideProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Side: React.FC<SideProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <Button
        onClick={toggleMenu}
        className={styles.btnham}
        icon={<img src={menu} alt="Menu Icon" className={styles.svgHamburgher} />}
      />

      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <div>
          <h2 className={styles.titleMenu}>Menu</h2>
          <ListMenu />
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Side;
