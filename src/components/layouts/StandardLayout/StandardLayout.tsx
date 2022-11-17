import Header from '@/components/Header';

import styles from './StandardLayout.module.css';

interface StandardLayoutProps {
  children?: React.ReactNode;
}

export default function StandardLayout({ children }: StandardLayoutProps) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
