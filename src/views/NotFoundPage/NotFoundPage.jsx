// import s from './NotFoundPage.module.css';
import { ReactComponent as Browser404 } from '../../img/404browser_102160.svg';
import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <>
      <Link className={s.Link} to="/">
        Go HOME
      </Link>

      <Browser404 />
    </>
  );
}
