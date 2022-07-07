import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryInfo } from '../app/features/countrySlice';
import styles from '../styles/CountryInfo.module.css';

const apiKey = 'af2778309f98e0c5d550f18b1778fb20';
const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution';

const CountryInfo = () => {
  const { countryName, lat, lon } = useParams();
  const finalUrl = `${baseURL}?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryInfo(finalUrl));
  }, []);

  const airStore = useSelector((state) => (state.country));
  const airInfo = Object.values(airStore);
  const location = useLocation();
  console.log(location);
  const { imgmap } = location.state;
  return (
    <>
      <h1 className={styles.countryName}>{countryName}</h1>
      <img src={imgmap} alt="country map" />
      <table>
        <thead>
          <tr>
            <td>Gas Name</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CO - Carbon Monoxide</td>
            <td>{airInfo[0]}</td>
          </tr>
          <tr>
            <td>NO - Nitrous Oxide</td>
            <td>{airInfo[1]}</td>
          </tr>
          <tr>
            <td>
              NO
              <sub>2</sub>
              {' '}
              - Nitrogen Dioxide
            </td>
            <td>{airInfo[2]}</td>
          </tr>
          <tr>
            <td>
              O
              <sub>3</sub>
              {' '}
              - Ozone
            </td>
            <td>{airInfo[3]}</td>
          </tr>
          <tr>
            <td>
              SO
              <sub>2</sub>
              {' '}
              - Sulphur Dioxide
            </td>
            <td>{airInfo[4]}</td>
          </tr>
          <tr>
            <td>PM2.5 - Particulate Matter</td>
            <td>{airInfo[5]}</td>
          </tr>
          <tr>
            <td>PM10 - Particulate Matter</td>
            <td>{airInfo[6]}</td>
          </tr>
          <tr>
            <td>
              NH
              <sub>3</sub>
              {' '}
              - Ammonia
            </td>
            <td>{airInfo[7]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CountryInfo;
