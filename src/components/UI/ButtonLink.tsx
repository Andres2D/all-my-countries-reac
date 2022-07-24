import { NavLink } from 'react-router-dom';
import styles from './ButtonLink.module.css';

interface Props {
  label: string;
  refPage: string;
  iconSvg?: string;
  isExternal: boolean;
  classes?: string;
}

const ButtonLink: React.FC<Props> = ({label, refPage, isExternal, classes}) => {
    if(isExternal) {
      return(
        <a 
          className={`${styles.link} ${classes}`}
          href={refPage} 
          target={isExternal ? '_blank' : '_self'} 
          rel='noreferrer'>
            {label}
        </a>
      );
    }

    return (
      <NavLink
        className={`${styles.link} ${classes}`}
        to={refPage}
        rel='noreferrer'>
          {label}
      </NavLink>
    );
};

export default ButtonLink;
