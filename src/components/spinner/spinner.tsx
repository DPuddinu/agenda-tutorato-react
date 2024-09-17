import styles from './spinner.module.css';

type Props = {
  color?: 'primary' | 'current';
};
const Spinner = ({ color = 'primary' }: Props) => {
  return <div className={`${styles.spinner} ${styles[color]}`} />;
};

export default Spinner;
