import styles from './LoadingDots.module.css';

export default function LoadingDots() {
  return (
    <span className={styles.root}>
      <span className={styles.dot} key='dot_1' />
      <span className={styles.dot} key='dot_2' />
      <span className={styles.dot} key='dot_3' />
    </span>
  );
}
