import { FormEvent } from "react";
import MassiveInput from "../components/MassiveInput";
import ButtonLink from "../components/UI/ButtonLink";
import { regionsList } from '../constants/regions';
import styles from './Main.module.css';

const Main = () => {

  const searchHandler = (input: FormEvent<HTMLInputElement>) => {
    console.log(input);
  };

  return (
    <div className={styles.main}>
      <MassiveInput 
        onChange={searchHandler} 
        placeholder='Search country'
      />
      <div className={styles.regions}>
        {
          regionsList.map((region, idx) => {
            return (
              <ButtonLink 
                key={idx}
                classes={styles.region}
                label={region}
                isExternal={false}
                refPage={`/countries/${region}`}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Main;
