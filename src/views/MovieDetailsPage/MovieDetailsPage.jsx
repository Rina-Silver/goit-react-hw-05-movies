import { useState, useEffect } from 'react';
import {
  useLocation,
  useRouteMatch,
  useHistory,
  useParams,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/tmdbfilms-api';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';
import { toast } from 'react-toastify';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';

  useEffect(() => {
    // console.log(path);
    // console.log(url);
    fetchMovieDetails(movieId)
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
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = movie;
  const genresList = genres?.map(genre => genre.name).join(', ');

  return (
    <section>
      <button
        type="button"
        className={s.Button}
        onClick={() => history.replace('/')}
      >
        Go back
      </button>
      {movie && (
        <>
          <div className={s.MovieCard}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
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
      <>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location?.state?.from },
          }}
          className={s.MovieInfoLink}
          activeClassName={s.MovieInfoLink__active}
        >
          Cast
        </NavLink>

        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location?.state?.from },
          }}
          className={s.MovieInfoLink}
          activeClassName={s.MovieInfoLink__active}
        >
          Reviews
        </NavLink>
      </>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </section>
  );
}
