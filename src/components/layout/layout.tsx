import { ReactNode } from 'react';
import Sides from '../sides/sides';
import { TableAppointment } from '../table/appointment-table';
import ToolBar from '../toolbar/toolbar';
import { getAppointments } from '@/features/auth/api/appointment';
import { useQuery } from '@tanstack/react-query';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['appointments'],
    queryFn: getAppointments
  });
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main>
        <TableAppointment />
        <Sides />
        {children}
      </main>
    </>
  );
};

export default Layout;
