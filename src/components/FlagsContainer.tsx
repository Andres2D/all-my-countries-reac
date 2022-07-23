import styles from './FlagsContainer.module.css';

interface Props {
  nationalFlag?: string;
  coatOfArmsFlag?: string;
  countryName?: string;
  googleMapsLink?: string;
  openStreetMapsLink?: string;
}

const FlagsContainer: React.FC<Props> = ({nationalFlag, coatOfArmsFlag, countryName, googleMapsLink, openStreetMapsLink}) => {
  return (
    <div className={styles.flags}>
      <div className={styles.country_flag}>
        <p className={styles.flag_label}>National flag</p>
        <img className={styles.flag} src={nationalFlag} alt={countryName} />
      </div>
      <div className={styles.army_flag}>
        <p className={styles.flag_label}>Coat of arms</p>
        <img className={styles.flag} src={coatOfArmsFlag} alt={`coa_${countryName}`} />
      </div>
      <div className={styles.maps}>
        {googleMapsLink && <a className={styles.map} rel='noreferrer' href={googleMapsLink} target='_blank'>Google Maps</a>}
        {openStreetMapsLink && <a className={styles.map} rel='noreferrer' href={openStreetMapsLink} target='_blank'>OpenStreet</a>}
      </div>
    </div> 
  );
};

export default FlagsContainer;
