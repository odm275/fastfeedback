import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();
  console.log('auth', auth);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => auth.signinWithGithub()}>Sign In</button>
        <div>{auth?.user?.email}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
