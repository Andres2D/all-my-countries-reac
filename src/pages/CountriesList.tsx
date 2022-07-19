import { useState } from 'react';
import countriesListMock from '../mock/countries-list.mock';
import MassiveInput from '../components/MassiveInput';
import CountryCard from '../components/CountryCard';
import styles from './CountriesList.module.css';

const CountriesList = () => {
  
  const [countriesList, setCountriesList] = useState([...countriesListMock]);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if(!event.currentTarget.value || event.currentTarget.value.trim() === '') {
      setCountriesList([...countriesListMock]);
    }
    setCountriesList([...countriesListMock]
      .filter(country => country.name?.common?.toLocaleLowerCase()
      .includes(event.currentTarget.value.toLocaleLowerCase())));
  }

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
            />
          ))}
      </section>
    </div>  
  );
};

export default CountriesList;
