/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import countriesData from '../data/countriesData';
import styles from '../styles/Countries.module.css';
import europe from '../styles/eu-map.svg';

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.europeSection}>
          <img src={europe} alt="eu map" className={styles.europe} />
          <div>
            <h1>Europe</h1>
            <p>Population: 746.4 Million</p>
          </div>
        </div>
      </section>
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Search country"
          onChange={(event) => { setSearchTerm(event.target.value); }}
        />
      </div>
      <section className={styles.countriesGrid}>
        {countriesData.filter((val) => {
          if (searchTerm === '') {
            return val;
          } if (val.country.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((item) => (
          <Link
            key={item.country}
            to={{
              pathname: `/countryInfo/${item.country}/${item.latitude}/${item.longitude}`,
            }}
            state={{
              imgmap: item.map,
            }}
          >
            <CountryCard
              country={item.country}
              imgmap={item.map}
            />
          </Link>
        ))}
      </section>
    </>
  );
};
export default Countries;
