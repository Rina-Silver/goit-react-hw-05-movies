import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from '../../services/tmdbfilms-api';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  //встроенный конструктор
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  // const onChangeQuery = () => {
  //   history.push({ ...location, search: `` });
  // };
  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    history.push({ ...location, search: `query=""` });
  }, [history, location]);

  return (
    <section>
      <Searchbar onSubmit={null} />
      {movies && (
        <div className={null}>
          <ul className={null}>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <li key={id} className={null}>
                  <NavLink
                    to={{ pathname: `movies/${id}`, state: { from: location } }}
                  >
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : defaultImg
                      }
                      alt={title}
                      className={null}
                    />
                    <h2 className={null}>{title}</h2>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MoviesPage;
