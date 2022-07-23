import styles from './TranslationBadge.module.css';

interface Props {
  translation: string;
}

const TranslationBadge: React.FC<Props> = ({translation}) => {
  return (
    <div className={styles.badge}>
      {translation}
    </div>
  )
};

export default TranslationBadge;
