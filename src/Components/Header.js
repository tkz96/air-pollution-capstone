import React from 'react';
import back from '../styles/backbutton.png';
import mic from '../styles/mic.png';
import gear from '../styles/gear.png';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header>
    <div className={styles.logo}>
      <img src={back} alt="back button" />
      <h3>Air Quality Report</h3>
    </div>
    <div className={styles.micandgear}>
      <img src={mic} alt="mic" />
      <img src={gear} alt="gear" />
    </div>
  </header>
);

export default Header;
