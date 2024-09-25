import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import { TableAppointment } from '@/components/table/appointment-table';
import { getAppointments } from '@/features/auth/api/appointment';
import { useQuery } from '@tanstack/react-query';
import styles from './appointmentsPage.module.css';

export const AppointmentsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['appointments'],
    queryFn: getAppointments
  });
  console.log(data?.data);
  return (
    <Layout>
      <div className="flex justify-between py-8 px-8">
        <p className={styles.title}>Dashboard</p>
        <Button className={styles.addAppBtn}></Button>
      </div>
      <div>{data && <TableAppointment appointments={data.data} />}</div>
    </Layout>
  );
};
