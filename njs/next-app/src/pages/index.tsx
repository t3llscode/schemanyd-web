import React from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* banner wraps the logo and provides its own background */}
      <div className={styles.banner}>
        <img
          className={styles.logo}
          src="https://t3l.ls/data/media/schemanyd_logo.svg"
          alt="schemanyd"
        />

        <img
          className={styles.cube}
          src="https://t3l.ls/data/media/schemanyd_cube.svg"
          alt="cube"
        />
      </div>

      <a
        className={styles.github}
        href="https://github.com/t3llscode/schemanyd"
        target="_blank"
        rel="noreferrer"
      >
        {/* GitHub mark (simple octocat silhouette) */}
        <svg
          className={styles.ghIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.102.814 2.222 0 1.605-.014 2.898-.014 3.293 0 .319.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span>Check the progress on GitHub</span>
      </a>
    </div>
  );
}