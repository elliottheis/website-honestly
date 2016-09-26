import React from 'react';
import styles from './style.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <nav>
        <ul className={styles.nav}>
          <li><a href="/services/">Services</a></li>
          <li><a href="/about-us/">About us</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/about-us/events/">Events</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
