import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Runic Numbers Translator</h1>
    </header>
  );
}
