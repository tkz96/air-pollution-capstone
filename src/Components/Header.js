import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import back from '../styles/backbutton.png';
import mic from '../styles/mic.png';
import gear from '../styles/gear.png';
import styles from '../styles/Header.module.css';

const Header = () => {
  const location = useLocation();
  const countryPage = location.pathname.includes('/countryInfo/');
  return (
    <header>
      <div className={styles.logo}>
        {countryPage ? (
          <Link to="/"><img className={styles.headerImages} src={back} alt="back button" /></Link>
        ) : null}
        <h3>Air Quality Report</h3>
      </div>
      <div className={styles.micandgear}>
        <img className={styles.headerImages} src={mic} alt="mic" />
        <img className={styles.headerImages} src={gear} alt="gear" />
      </div>
    </header>
  );
};
export default Header;
