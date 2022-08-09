import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import styles from './Header.module.css';
import Breadcrumbs from '../../UI/Breadcrumbs';

const Header = () => {

  let navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/main", { replace: true });
  };

  return (
    <header className={styles.header}>
      <img 
        className={styles.logo} 
        src={logo}
        onClick={logoClickHandler} 
        alt="countries app" 
      />
      <Breadcrumbs />  
    </header>
  );
};

export default Header;
