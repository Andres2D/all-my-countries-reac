import { Country } from '../interfaces/country.interface';
import styles from './CountryCard.module.css';

interface Props {
  country: Country;
  onClick: (countryId?: string) => void;
}

const CountryCard: React.FC<Props> = ({country, onClick}) => {

  const clickHandler = () => {
    onClick(country.name?.common);
  };

  return (
    <div onClick={clickHandler} className={styles.card}>
      <img 
        className={styles.flag} 
        src={country.flags?.svg} 
        alt={country.name?.common} 
        loading='lazy'
      />
      <h1 className={styles.common_name}>{country.name?.common}</h1>
    </div>
  );
};

export default CountryCard;
