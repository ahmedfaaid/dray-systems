import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
// import Construction from '../public/undraw_QA_engineers_dg5p.svg';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>Coming Soon</h2>
          <h1>Automated Manpower Coordination</h1>
          <p>Manage candidate status, availability and scheduling.</p>
        </div>
        <div className={styles.formContainer}>
          <h2>Join our mailing list for updates</h2>
          <form>
            <div className={styles.formField}>
              <label htmlFor='firstName'>First Name:</label>
              <input type='text' name='firstName' placeholder='Elizabeth' />
            </div>
            <div className={styles.formField}>
              <label htmlFor='lastName'>Last Name:</label>
              <input type='text' name='lastName' placeholder='Swann' />
            </div>
            <div className={styles.formField}>
              <label htmlFor='email'>Email:</label>
              <input
                type='text'
                name='email'
                placeholder='e.swann@yourcompany.com'
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor='company'>Company Name:</label>
              <input type='text' name='company' placeholder='Your Company' />
            </div>
            <div className={styles.submit}>
              <button type='submit'>Join Mailing List</button>
            </div>
          </form>
          {/* <Construction className={styles.image} alt='Construction' /> */}
        </div>
        <div className={styles.gradient} />
      </div>
    </Layout>
  );
}
