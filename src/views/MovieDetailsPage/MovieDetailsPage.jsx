import { useState, useEffect } from 'react';
import {
  useLocation,
  useRouteMatch,
  useHistory,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/tmdbfilms-api';
import { toast } from 'react-toastify';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';

  useEffect(() => {
    fetchMovieDetails(moviesId)
      // .then(data => console.log(data.poster_path))
      .then(setMovie)
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
  }, [moviesId]);

  const { poster_path, title, overview, genres, vote_average } = movie;
  const genresList = genres?.map(genre => genre.name).join(', ');

  return (
    <section>
      <button
        type="button"
        className={s.Button}

        // onClick={() => history.goBack()}
      >
        Go back
      </button>
      {movie && (
        <>
          <div className={s.MovieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="300"
            />
            <div className={s.MovieDescription}>
              <h1 className={s.MovieTitle}>{title}</h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genresList}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
