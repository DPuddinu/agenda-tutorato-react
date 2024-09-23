import { PropsWithChildren, useState } from 'react';
import Button from '../button/button';
import { ListMenu } from '../list-menu/list-menu';
import { Logout } from '../logout-button/logout';
import Side from '../sides/sides';
import styles from './layout.module.css';

const Layout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.nav}>
          <div className={styles.listMenu}>
            <ListMenu />
          </div>
          <Side isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className={styles.accountButtonWrapper}>
            <Button className={styles.btnAccount} onClick={toggleModal}>
              F
            </Button>
            {isModalOpen && (
              <div className={styles.modal}>
                <p>
                  <a href="#">Account </a>
                </p>
                <p>
                  <a href="#">Settings</a>
                </p>
                <Logout />
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
