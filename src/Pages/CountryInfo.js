import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountryInfo } from '../app/features/countrySlice';

const CountryInfo = () => {
  const { countryName, lat, lon } = useParams();
  const dispatch = useDispatch();

  useEffect(dispatch(fetchCountryInfo(lat, lon)), []);

  return (
    <>
      <h1>{countryName}</h1>
      <p>{lat}</p>
      <p>{lon}</p>
    </>
  );
};

export default CountryInfo;
