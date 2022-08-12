import { Link, useLocation } from 'react-router-dom';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
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
        <>
          <ArrowCircleRightIcon key={idx} className={`${styles.symbol} h-5 w-5 text-blue-500`} />
          <Link 
            key={path}
            className={styles.breadcrumb} 
            to={`/${paths.slice(0, idx+1).join('/')}`}>
              &nbsp;{path.toLocaleLowerCase()}&nbsp;
          </Link>
        </>
        )
      }
    </div>
  );
};

export default Breadcrumbs;
