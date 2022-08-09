import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {

  let location = useLocation();
  let paths: string[] = [];
  paths = location.pathname.split('/');
  paths = paths.slice(1, paths.length)
  paths = paths.map(path => (path));

  return (
    <div className={styles.breadcrumbs}>
      {
        paths.map((path, idx) => 
          <Link 
            key={path}
            className={styles.breadcrumb} 
            to={`/${paths.slice(0, idx+1).join('/')}`}>
              <small className={styles.symbol}>{`>`}</small>
              &nbsp;{path.toLocaleLowerCase()}&nbsp;
          </Link>
        )
      }
    </div>
  );
};

export default Breadcrumbs;
