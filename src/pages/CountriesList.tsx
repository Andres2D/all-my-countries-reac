import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import countriesListMock from '../mock/countries-list.mock';
import { countryQueryParamCoder } from '../helpers/country-query';
import MassiveInput from '../components/MassiveInput';
import CountryCard from '../components/CountryCard';
import styles from './CountriesList.module.css';

const CountriesList = () => {
  
  const navigate = useNavigate();
  const [countriesList, setCountriesList] = useState([...countriesListMock]);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if(!event.currentTarget.value || event.currentTarget.value.trim() === '') {
      setCountriesList([...countriesListMock]);
    }
    setCountriesList([...countriesListMock]
      .filter(country => country.name?.common?.toLocaleLowerCase()
      .includes(event.currentTarget.value.toLocaleLowerCase())));
  }

  const countryClickHandler = (countryId?: string) => {
    if(!countryId) {
      return;
    }
    const query = countryQueryParamCoder(countryId);
    const url = `/country/${query}`;
    navigate(url);
  };

  return (
    <div>
      <h1 className={styles.title}>Asia</h1>
      <MassiveInput 
        placeholder='Japan | 日本'
        onChange={searchHandler}
      />
      <section className={styles.country_cards}>
        {
          countriesList.map(country => ( 
            <CountryCard 
              key={country.name?.official} 
              country={country} 
              onClick={countryClickHandler} 
            />
          ))}
      </section>
    </div>  
  );
};

export default CountriesList;
