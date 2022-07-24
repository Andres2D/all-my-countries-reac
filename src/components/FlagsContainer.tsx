import ButtonLink from './UI/ButtonLink';
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
        {googleMapsLink && <ButtonLink isExternal refPage={googleMapsLink} label='Google Maps' />}
        {openStreetMapsLink && <ButtonLink isExternal refPage={openStreetMapsLink} label='OpenStreet' />}
      </div>
    </div> 
  );
};

export default FlagsContainer;
