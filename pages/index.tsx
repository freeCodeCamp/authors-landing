import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Meta from '../components/meta';

const availableGhostInstances = [
  { languageSlug: 'english', buttonLabel: 'English' },
  // Everything below is ordered alphabetically
  { languageSlug: 'arabic', buttonLabel: 'Arabic (عَرَبِيّ)' },
  { languageSlug: 'bengali', buttonLabel: 'Bengali (বাংলা)' },
  { languageSlug: 'chinese', buttonLabel: 'Chinese (中文)' },
  { languageSlug: 'espanol', buttonLabel: 'Spanish (Español)' },
  { languageSlug: 'french', buttonLabel: 'French (CHANGE THIS)' },
  { languageSlug: 'german', buttonLabel: 'German (Deutsch)' },
  { languageSlug: 'hindi', buttonLabel: 'Hindi (हिन्दी)' },
  { languageSlug: 'italian', buttonLabel: 'Italian (Italiano)' },
  { languageSlug: 'japanese', buttonLabel: 'Japanese (日本語)' },
  { languageSlug: 'korean', buttonLabel: 'Korean (한국어)' },
  { languageSlug: 'portuguese', buttonLabel: 'Portuguese (Português)' },
  { languageSlug: 'swahili', buttonLabel: 'Swahili (CHANGE THIS)' },
  { languageSlug: 'turkish', buttonLabel: 'Turkish (Türk)' },
  { languageSlug: 'ukrainian', buttonLabel: 'Ukrainian (Українська)' },
  { languageSlug: 'urdu', buttonLabel: 'Urdu (اُردُو)' }
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <header>
        <nav className={styles.universalnav}>
          <Image
            alt='freeCodeCamp.org logo'
            src='/fcc_primary.svg'
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
          {availableGhostInstances.map(({ languageSlug, buttonLabel }) => (
            <a
              key={languageSlug}
              href={`https://www.freecodecamp.org/${languageSlug}/news/ghost`}
              className={styles.card}
              target='_blank'
              rel='noreferrer'
            >
              <h2>{buttonLabel} &rarr;</h2>
            </a>
          ))}
        </div>
        <div className={styles.heading}>
          <h2>Interested in being an author?</h2>
          <p className={styles.description}>
            Here is a quick introduction on{' '}
            <a
              href='https://www.freecodecamp.org/news/how-to-write-for-freecodecamp/'
              target='_blank'
              rel='noreferrer'
            >
              how to write for freeCodeCamp news
            </a>
            , and here is the{' '}
            <a
              href='https://www.freecodecamp.org/news/developer-news-style-guide/'
              target='_blank'
              rel='noreferrer'
            >
              freeCodeCamp publication style guide
            </a>
            .
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://www.freecodecamp.org/terms'
          target='_blank'
          rel='noopener noreferrer'
        >
          Terms of Service
        </a>
        <a
          href='https://www.freecodecamp.org/privacy'
          target='_blank'
          rel='noopener noreferrer'
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Home;
