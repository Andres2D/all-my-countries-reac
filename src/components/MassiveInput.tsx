import styles from './MassiveInput.module.css';

interface Props {
  placeholder: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const MassiveInput: React.FC<Props> = ({placeholder, onChange}) => {
  return (
    <>
      <input
        className={styles.search} 
        type='text' 
        placeholder={placeholder} 
        onChange={onChange}
      />
    </>
  )
};

export default MassiveInput;
