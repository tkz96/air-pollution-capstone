import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import countriesData from '../data/countriesData';
import styles from '../styles/Countries.module.css';

const Countries = () => (
  <>
    <section>
      <h1>Countries</h1>
    </section>
    <section className={styles.countriesGrid}>
      {countriesData.map((item) => (
        <Link
          key={item.country}
          to={{ pathname: `/countryInfo/${item.country}/${item.latitude}/${item.longitude}` }}
          className={styles.redBorder}
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
