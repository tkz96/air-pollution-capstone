import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CountryCard.module.css';

const CountryCard = ({
  country, map,
}) => (
  <div>
    <img className={styles.countryImage} src={map} alt="country map" />
    <div>
      <h3 className={styles.countryName}>{country}</h3>
    </div>
  </div>
);

CountryCard.propTypes = {
  map: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CountryCard;
