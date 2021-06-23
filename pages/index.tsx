import { useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Close from '../public/close_black_24dp.svg';

interface Error {
  error?: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  detail?: string;
}

export default function Home() {
  const [data, setData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>({
    error: false,
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    detail: ''
  });
  const [res, setRes] = useState<any>({
    status: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const subscribe = async e => {
    e.preventDefault();

    setLoading(true);

    try {
      const req = await fetch('/api/mailinglist', {
        method: 'POST',
        body: JSON.stringify({ data })
      });

      const response = await req.json();

      setRes(response);
    } catch (err) {
      setError(err);
    }

    setData({
      email: '',
      firstName: '',
      lastName: '',
      company: ''
    });

    setLoading(false);
  };

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
              <input
                type='text'
                name='firstName'
                placeholder='Elizabeth'
                value={data.firstName}
                onChange={handleChange}
              />
              {error.firstName && <Close className={styles.close} />}
            </div>
            <div className={styles.formField}>
              <label htmlFor='lastName'>Last Name:</label>
              <input
                type='text'
                name='lastName'
                placeholder='Swann'
                value={data.lastName}
                onChange={handleChange}
              />
              {error.lastName && <Close className={styles.close} />}
            </div>
            <div className={styles.formField}>
              <label htmlFor='email'>Email:</label>
              <input
                type='text'
                name='email'
                placeholder='e.swann@yourcompany.com'
                value={data.email}
                onChange={handleChange}
              />
              {error.email && <Close className={styles.close} />}
            </div>
            <div className={styles.formField}>
              <label htmlFor='company'>Company Name:</label>
              <input
                type='text'
                name='company'
                placeholder='Your Company'
                value={data.company}
                onChange={handleChange}
              />
              {error.company && <Close className={styles.close} />}
            </div>
            <div className={styles.error_detail}>
              {error.detail && <p>{error.detail}</p>}
            </div>
            <div className={styles.submit}>
              <button
                type='submit'
                disabled={loading || res.status === 'subscribed'}
                onClick={subscribe}
              >
                {res && res.status === 'subscribed'
                  ? 'Subscribed'
                  : 'Join Mailing List'}
              </button>
            </div>
          </form>
        </div>
        <div className={styles.gradient} />
      </div>
    </Layout>
  );
}
