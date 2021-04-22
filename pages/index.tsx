import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Construction from '../public/undraw_QA_engineers_dg5p.svg';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>Coming Soon</h2>
          <h1>Automated Manpower Coordination</h1>
          <p>Manage candidate status, availability and scheduling.</p>
        </div>
        <div className={styles.imageContainer}>
          <Construction className={styles.image} alt='Construction' />
        </div>
        <div className={styles.gradient} />
      </div>
    </Layout>
  );
}
