import React from 'react';
import PropTypes from 'prop-types';

const CountryCard = ({
  country, map,
}) => (
  <div>
    <img src={map} alt="country map" />
    <div>
      <h2>{country}</h2>

    </div>
  </div>
);

CountryCard.propTypes = {
  map: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CountryCard;
