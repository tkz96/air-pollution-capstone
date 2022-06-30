import { Link } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';
import countriesData from '../data/countriesData';

const Countries = () => (
  <>
    <section>
      <h1>Countries</h1>
    </section>
    <section className="countries-grid">
      {countriesData.map((item) => (
        <Link key={item.country} to={{ pathname: `/country/${item.country}` }}>
          <CountryCard country={item.country} map={item.map} />
        </Link>
      ))}
    </section>
  </>
);

export default Countries;
