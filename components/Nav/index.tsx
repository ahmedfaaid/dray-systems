import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.logo}>
          <img src='/logo/dray-logo-purple.png' alt='Dray Systems' />
        </a>
      </Link>
    </nav>
  );
}
