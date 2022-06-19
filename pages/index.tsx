import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Meta from '../components/meta';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <header>
        <nav className={styles.universalnav}>
          <Image
            alt="freeCodeCamp.org logo"
            src="/fcc_primary.svg"
            width={200}
            height={24}
          />
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome back Authors.</h1>

        <p className={styles.description}>
          Select one of the languages below, and enter your credentials for the
          Ghost CMS on the next page to get started.
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.freecodecamp.org/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>English &rarr;</h2>
          </a>
          <a
            href="https://chinese.freecodecamp.org/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Chinese (中文) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/espanol/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Spanish (Español) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/italian/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Italian (Italiano) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/japanese/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Japanese (日本語) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/arabic/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Arabic (عربي) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/portuguese/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Portuguese (Português) &rarr;</h2>
          </a>
          <a
            href="https://www.freecodecamp.org/ukrainian/news/ghost"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Ukrainian (український) &rarr;</h2>
          </a>
        </div>
        <div className={styles.heading}>
          <h2>Interested in being an author?</h2>
          <p className={styles.description}>
            Here is a quick introduction on{' '}
            <a
              href="https://www.freecodecamp.org/news/how-to-write-for-freecodecamp/"
              target="_blank"
              rel="noreferrer"
            >
              how to write for freeCodeCamp news
            </a>
            , and here is the{' '}
            <a
              href="https://www.freecodecamp.org/news/developer-news-style-guide/"
              target="_blank"
              rel="noreferrer"
            >
              freeCodeCamp publication style guide
            </a>
            .
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.freecodecamp.org/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
        <a
          href="https://www.freecodecamp.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Home;
