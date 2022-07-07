import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CountryCard.module.css';

const CountryCard = ({
  country, imgmap,
}) => (
  <div>
    <img className={styles.countryImage} src={imgmap} alt="country map" />
    <div>
      <h3 className={styles.countryName}>{country}</h3>
    </div>
  </div>
);

CountryCard.propTypes = {
  imgmap: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CountryCard;
