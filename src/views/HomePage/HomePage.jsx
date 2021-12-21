import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from '../../services/tmdbfilms-api';
import s from './HomePage.module.css';

export default function HomePage() {
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';

  const [movies, setMovies] = useState([]);
  //для вложенной навигации исп url в useRouteMatch
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMovies(data.results))
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
  }, []);
  return (
    <section>
      {movies && (
        <>
          <h2 className={s.Title}>Tranding Films</h2>

          <ul className={s.ImageGallery}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={s.ImageGalleryItem}>
                <Link
                  to={{
                    pathname: `${url}movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    className={s.ImageGalleryItem__image}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
