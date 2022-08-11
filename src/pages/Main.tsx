import { FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { debounceTime, Subject } from 'rxjs';
import CountryCard from "../components/CountryCard";
import MassiveInput from "../components/MassiveInput";
import ButtonLink from "../components/UI/ButtonLink";
import { regionsList } from '../constants/regions';
import { countryQueryParamCoder } from "../helpers/country-query";
import { Country } from "../interfaces/country.interface";
import countriesList from '../mock/countries-list.mock';
import styles from './Main.module.css';

const Main = () => {

  let navigate = useNavigate();
  const [countriesSearch, setCountriesSearch] = useState<Country[]>([]);
  const inputSubject = new Subject<string>();

  const searchHandler = (input: FormEvent<HTMLInputElement>) => {
    inputSubject.next(input.currentTarget.value);
  };

  inputSubject.pipe(
    debounceTime(1000)
  ).subscribe({
    next: (input) => {
      if(input.trim() === '') {
        setCountriesSearch([]);
        return;
      }
      const matchCountries = countriesList.filter(c => c.name?.common?.toLowerCase().includes(input.toLocaleLowerCase())) || [];
      setCountriesSearch(matchCountries);
    }
  });

  const countryClickHandler = ({region, name}: Country) => {

    if(!region || !name?.common) {
      return;
    }

    const nameFormatted = countryQueryParamCoder(name?.common!);
    const url = `/countries/${region?.toLocaleLowerCase()}/${nameFormatted.toLocaleLowerCase()}`;
    navigate(url);
  }

  const regionOptions = regionsList.map((region, idx) => {
    return (
      <ButtonLink 
        key={idx}
        classes={styles.region}
        label={region}
        isExternal={false}
        refPage={`/countries/${region}`}
      />
    )
  });

  const countriesFiltered = countriesSearch.map(country => ( 
    <CountryCard 
      key={country.name?.official} 
      country={country} 
      onClick={countryClickHandler.bind(null, country)} 
    />
  ));

  return (
    <div className={styles.main}>
      <MassiveInput 
        onChange={searchHandler} 
        placeholder='Search country'
      />
      <div className={styles.regions}>
        { 
          countriesSearch.length === 0 &&
          regionOptions
        }
        {
          countriesSearch.length > 0 &&
          countriesFiltered
        }
      </div>
    </div>
  );
};

export default Main;
