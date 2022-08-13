import styles from './CountryInformation.module.css';
import TranslationBadge from './TranslationBadge';

interface Props {
  population: string;
  capital: string;
  region: string;
  unMember: boolean;
  altSpellings: string;
  independent: boolean;
  timezones: string;
  tld: string;
  borders: string;
  flag: string;
  currencies: string;
  demonyms: string;
  fifa: string;
  idd: string;
  languages: string;
  translations: string[];
}

const CountryInformation: React.FC<Props> = 
({population,
  capital,
  region,
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
  translations}) => {
  return (
    <div className={styles.information}>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Population:</h3>
        <h3 className={styles.field_value}>{population}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Capital:</h3>
        <h3 className={styles.field_value}>{capital}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Spelling:</h3>
        <h3 className={styles.field_value}>{altSpellings}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Timezones:</h3>
        <h3 className={styles.field_value}>{timezones}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Top level domain:</h3>
        <h3 className={styles.field_value}>{tld}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Borders:</h3>
        <h3 className={styles.field_value}>{borders}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Region:</h3>
        <h3 className={styles.field_value}>{region}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Currencies:</h3>
        <h3 className={styles.field_value}>{currencies}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Languages:</h3>
        <h3 className={styles.field_value}>{languages}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Dialing code:</h3>
        <h3 className={styles.field_value}>{idd}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Demonyms:</h3>
        <h3 className={styles.field_value}>{demonyms}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Icon flag:</h3>
        <h3 className={styles.field_value}>{flag}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>UN member:</h3>
        <h3 className={styles.field_value}>{unMember ? 'YES' : 'NO'}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>Independent:</h3>
        <h3 className={styles.field_value}>{independent ? 'YES' : 'NO'}</h3>
      </div>
      <div className={styles.info_field}>
        <h3 className={styles.field_title}>FIFA:</h3>
        <h3 className={styles.field_value}>{fifa ? fifa : 'none'}</h3>
      </div>
      <div className={styles.info_translations}>
        {translations.map((translation, idx) => <TranslationBadge key={idx} translation={translation} />)}
      </div>
    </div>
  )
};

export default CountryInformation;
