import styles from './Button.module.css';

interface Props {
  label: string;
  refPage?: string;
  iconSvg?: string;
}

const Button: React.FC<Props> = ({label, refPage}) => {
  
  if(refPage) {
    return <a className={styles.link} href={refPage} target='_blank' rel='noreferrer'>{label}</a>
  }
  
  return <button className={styles.btn}>{label}</button>;
};

export default Button;
