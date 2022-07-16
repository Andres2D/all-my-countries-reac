import countriesListMock from '../mock/countries-list.mock';
import MassiveInput from '../components/MassiveInput';
import CountryCard from '../components/CountryCard';
import styles from './CountriesList.module.css';

const CountriesList = () => {

  const countriesCards = countriesListMock.map(country => {
    return ( 
      <CountryCard 
        key={country.name?.official} 
        country={country}  
      />
    );
  });

  const searchHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    console.log(event.currentTarget.value);
  }

  return (
    <div>
      <h1 className={styles.title}>Asia</h1>
      <MassiveInput 
        placeholder='Japan | 日本'
        onChange={searchHandler}
      />
      <section className={styles.country_cards}>
        {countriesCards}
      </section>
    </div>  
  );
};

export default CountriesList;
