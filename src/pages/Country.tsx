import { useParams } from 'react-router-dom';
import countryMock from '../mock/country.mock';
import FlagsContainer from '../components/FlagsContainer';
import CountryInformation from '../components/CountryInformation';
// import { countryQueryParamDecoder } from '../helpers/country-query';
import { 
  currencyFormat,
  demonymsFormat,
  phoneCodesFormat,
  languagesFormat,
  translationsFormat,
  countryNameFormat
} from '../helpers/formats';

import styles from './Country.module.css';

const Country = () => {
  console.log(countryMock);
  const { countryName } = useParams();
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
    translations
  } = countryMock;
  if(!countryName) {
    return <p className='centered'>Invalid country name</p>
  }

  // const country = countryQueryParamDecoder(countryName);

  return (
    <>
      <h1 className={styles.title}>{name ? countryNameFormat(name) : 'Not found'}</h1>
      <section className={styles.info_section}>
        <FlagsContainer 
          nationalFlag={flags?.svg}
          coatOfArmsFlag={coatOfArms?.svg}
          countryName={name?.common}
        />
        <CountryInformation 
          population={population ? population?.toLocaleString() : '0'}
          capital={capital ? capital?.join(',') : 'none'}
          altSpellings={altSpellings ? altSpellings?.join(' | ') : 'none'}
          timezones={timezones ? timezones?.join(' | ') : 'none'}
          tld={tld ? tld.join(' | ') : 'none'}
          borders={borders ? borders.join(' | ') : 'none'}
          region={`${region} - ${subregion}}`}
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

export default Country;
