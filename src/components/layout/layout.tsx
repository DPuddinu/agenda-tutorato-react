import { ReactNode } from 'react';
import ToolBar from '../toolbar/toolbar';
import Sides from '../sides/sides';
import Backdrop from '../backdrop/backdrop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main>
        <Sides />
        <Backdrop />
        {children}
      </main>
    </>
  );
};

export default Layout;
