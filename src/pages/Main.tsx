import { FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { debounceTime, Subject } from 'rxjs';
import CountryCard from "../components/CountryCard";
import MassiveInput from "../components/MassiveInput";
import ButtonLink from "../components/UI/ButtonLink";
import { searchEndpoint } from "../constants/page-urls";
import { regionsList } from '../constants/regions';
import { countryQueryParamCoder } from "../helpers/country-query";
import useRequest from "../hooks/use-request";
import { Country } from "../interfaces/country.interface";
import styles from './Main.module.css';

const Main = () => {

  let navigate = useNavigate();
  const [countriesSearch, setCountriesSearch] = useState<Country[]>([]);
  const inputSubject = new Subject<string>();

  const searchHandler = (input: FormEvent<HTMLInputElement>) => {
    inputSubject.next(input.currentTarget.value);
  };

  const { 
    error,
    setError,
    // isLoading,
    sendRequest
  } = useRequest(); 

  const setSearchResults = (countries: Country[]) => {
    setCountriesSearch(countries);
  }

  inputSubject.pipe(
    debounceTime(1000)
  ).subscribe({
    next: (input) => {
      if(input.trim() === '') {
        setCountriesSearch([]);
        setError(null);
        return;
      }
      sendRequest(searchEndpoint(input), setSearchResults);
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
        label={region.title}
        isExternal={false}
        refPage={`/countries/${region.query}`}
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
      {
        error 
        ? <p>Country not found</p>
        :
         (<div className={styles.regions}>
            { 
              countriesSearch.length === 0 &&
              regionOptions
            }
            {
              countriesSearch.length > 0 &&
              countriesFiltered
            }
          </div>)
      }
    </div>
  );
};

export default Main;
