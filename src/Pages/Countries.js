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
