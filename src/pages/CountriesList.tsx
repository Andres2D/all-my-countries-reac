import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { countryQueryParamCoder } from '../helpers/country-query';
import MassiveInput from '../components/MassiveInput';
import CountryCard from '../components/CountryCard';
import styles from './CountriesList.module.css';
import useRequest from '../hooks/use-request';
import { regionEndpoint } from '../constants/page-urls';
import { Country } from '../interfaces/country.interface';
import { regionsList } from '../constants/regions';
import { RegionDetails } from '../interfaces/region.interface';

const CountriesList = () => {
  
  const navigate = useNavigate();
  const { regionId } = useParams();
  const [inputSettings, setInputSettings] = useState<RegionDetails>();
  const [originalList, setOriginalList] = useState<Country[]>([]);
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const { 
    error,
    isLoading,
    sendRequest
  } = useRequest(); 

  useEffect(() => {
    sendRequest(regionEndpoint(regionId), (countries: Country[]) => {
      setCountriesList(countries);
      setOriginalList(countries);
    });
    setInputSettings(regionsList.find(region => region.query === regionId));
  }, [sendRequest, regionId])

  if(isLoading) {
    return <p>Loading ...</p>;
  }

  if(!countriesList || error) {
    return <p>Error</p>;
  }

  const searchHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if(!event.currentTarget.value || event.currentTarget.value.trim() === '') {
      setCountriesList([...originalList]);
    }
    setCountriesList([...originalList]
      .filter(country => country.name?.common?.toLocaleLowerCase()
      .includes(event.currentTarget.value.toLocaleLowerCase())));
  }

  const countryClickHandler = (countryId?: string) => {
    if(!countryId) {
      return;
    }
    const query = countryQueryParamCoder(countryId);
    const url = `/countries/${regionId}/${query}`;
    navigate(url);
  };

  return (
    <div>
      <h1 className={styles.title}>{inputSettings?.title}</h1>
      <MassiveInput 
        placeholder={inputSettings?.placeholder || ''}
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
