// src/components/Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
        <div className={styles.rectangle3}></div>
        <div className={styles.rectangle4}></div>
        <div className={styles.rectangle5}></div>
        <div className={styles.rectangle6}></div>
      </div>
        
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#">📧 Inbox</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">📅 Calendar</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">✔️ Fehlzeit</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">✔️ Noten</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;