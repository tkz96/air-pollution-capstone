import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import countriesData from '../data/countriesData';
import styles from '../styles/Countries.module.css';
import europe from '../styles/eu-map.svg';

const Countries = () => (
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
    <section className={styles.countriesGrid}>
      {countriesData.map((item) => (
        <Link
          key={item.country}
          to={{ pathname: `/countryInfo/${item.country}/${item.latitude}/${item.longitude}` }}
        >
          <CountryCard
            country={item.country}
            map={item.map}
          />
        </Link>
      ))}
    </section>
  </>
);

export default Countries;
