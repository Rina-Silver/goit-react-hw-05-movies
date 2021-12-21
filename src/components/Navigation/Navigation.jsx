import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.Link} activeClassName={s.ActiveLink}>
      HOME
    </NavLink>
    <NavLink to="/movies" className={s.Link} activeClassName={s.ActiveLink}>
      MOVIES
    </NavLink>
  </nav>
);
export default Navigation;
