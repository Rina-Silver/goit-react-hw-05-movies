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

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchSearchingMovies(searchQuery)
      .then(data => {
        if (data.results.length === 0) {
          toast.info('Nothing found', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setMovies([]);
        }
        setMovies(data.results);
      })
      .catch(error =>
        toast.error('Error, try again later', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      );
  }, [searchQuery]);

  const onChangeQuery = query => {
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <section>
      <Searchbar onSubmit={onChangeQuery} />
      {movies && (
        <div className={null}>
          <ul className={s.ImageGallery}>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <li key={id} className={s.ImageGalleryItem}>
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
                      className={s.ImageGalleryItem__image}
                    />
                    <h2 className={s.MovieTitle}>{title}</h2>
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
