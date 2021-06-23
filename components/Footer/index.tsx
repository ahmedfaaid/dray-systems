import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&#169; {new Date().getFullYear()} Dray Systems</p>
    </footer>
  );
}
