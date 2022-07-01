import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountryInfo } from '../app/features/countrySlice';

const apiKey = 'af2778309f98e0c5d550f18b1778fb20';
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';

const CountryInfo = () => {
  const { countryName, lat, lon } = useParams();
  const finalUrl = `${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryInfo(finalUrl));
  }, []);

  return (
    <>
      <h1>{countryName}</h1>
    </>
  );
};

export default CountryInfo;
