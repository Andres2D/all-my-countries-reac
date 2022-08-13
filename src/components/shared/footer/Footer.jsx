import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      By Andres2D | 
      <a className={styles.link} href='https://github.com/Andres2D/all-my-countries-reac'>Repository</a> |  
      <a className={styles.link} href='https://restcountries.com/'>CountriesAPI</a>
    </footer>
  )
}

export default Footer;
