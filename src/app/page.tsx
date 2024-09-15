// src/app/page.tsx
import React from 'react';
import styles from './Home.module.css'; // CSS file for styling the dashboard

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Übersicht</h1>
      <div className={styles.overviewGrid}>
        <div className={styles.card}>
          <h2>Fehlzeiten</h2>
          <p>Diesen Monat:</p>
          <div className={styles.chart}></div> {/* Placeholder for chart */}
        </div>
        <div className={styles.card}>
          <h2>Notenübersicht</h2>
          <p>Jahresvergleich:</p>
          <div className={styles.chart}></div> {/* Placeholder for chart */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;