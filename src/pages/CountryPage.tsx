import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FlagsContainer from '../components/FlagsContainer';
import CountryInformation from '../components/CountryInformation';
import { 
  currencyFormat,
  demonymsFormat,
  phoneCodesFormat,
  languagesFormat,
  translationsFormat,
  countryNameFormat
} from '../helpers/formats';
import { countryEndpoint } from '../constants/page-urls';
import useRequest from '../hooks/use-request';

import styles from './CountryPage.module.css';
import { Country } from '../interfaces/country.interface';

const CountryPage = () => {

  const [countryData, setCountryData] = useState<Country>();
  const { countryName } = useParams();

  const setCountry = (country: any) => {
    setCountryData(country[0]);
  }

  const { 
    error,
    isLoading,
    sendRequest
  } = useRequest(); 

  useEffect(() => {
    sendRequest(countryEndpoint(countryName), setCountry);
  }, [sendRequest, countryName])
  
  if(!countryName || !countryData || isLoading) {
    return <p>Loading ...</p>
  }

  if(error) {
    return <p>Error</p>
  }

  const { 
    name, 
    flags, 
    coatOfArms,
    population,
    capital,
    region,
    subregion,
    unMember,
    altSpellings,
    independent,
    timezones,
    tld,
    borders,
    flag,
    currencies,
    demonyms,
    fifa,
    idd,
    languages,
    translations,
    maps
  } = countryData!;

  if(!countryName) {
    return <p className='centered'>Invalid country name</p>
  }

  return (
    <>
      <h1 className={styles.title}>{name ? countryNameFormat(name) : 'Not found'}</h1>
      <section className={styles.info_section}>
        <FlagsContainer 
          nationalFlag={flags?.svg}
          coatOfArmsFlag={coatOfArms?.svg}
          countryName={name?.common}
          googleMapsLink={maps?.googleMaps}
          openStreetMapsLink={maps?.openStreetMaps}
        />
        <CountryInformation 
          population={population ? population?.toLocaleString() : '0'}
          capital={capital ? capital?.join(',') : 'none'}
          altSpellings={altSpellings ? altSpellings?.join(' | ') : 'none'}
          timezones={timezones ? timezones?.join(' | ') : 'none'}
          tld={tld ? tld.join(' | ') : 'none'}
          borders={borders ? borders.join(' | ') : 'none'}
          region={`${region} - ${subregion}`}
          currencies={currencies ? currencyFormat(currencies) : 'none'}
          languages={languages ? languagesFormat(languages) : 'none'}
          idd={idd ? phoneCodesFormat(idd) : 'none'}
          demonyms={demonyms ? demonymsFormat(demonyms) : 'none'}
          flag={flag ? flag : 'none'}
          unMember={unMember !== undefined ? unMember : false}
          independent={independent !== undefined ? independent : false}
          fifa={fifa ? fifa : 'none'}
          translations={translations ? translationsFormat(translations) : []}
        />
      </section>
    </>
  );
};

export default CountryPage;
