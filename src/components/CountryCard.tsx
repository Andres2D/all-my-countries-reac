import { Country } from '../interfaces/country.interface';
import styles from './CountryCard.module.css';

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({country}) => {
  return (
    <div className={styles.card}>
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
