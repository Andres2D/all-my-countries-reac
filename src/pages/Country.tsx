import { useParams } from 'react-router-dom';
import { countryQueryParamDecoder } from '../helpers/country-query';

const Country = () => {
  const { countryName } = useParams();

  if(!countryName) {
    return <p className='centered'>Invalid country name</p>
  }

  const country = countryQueryParamDecoder(countryName);
  return <p>{country}!</p>
};

export default Country;
