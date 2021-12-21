import { useState, useEffect } from 'react';
import { fetchMovieCasts } from '../../services/tmdbfilms-api';
import PropTypes from 'prop-types';
import s from './Cast.module.css';
import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';

export default function Cast({ movieId }) {
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';
  const [cast, setCast] = useState(null);
  //   console.log(movieId);

  useEffect(() => {
    fetchMovieCasts({ movieId })
      .then(data => setCast(data.cast))
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
  return (
    <>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={s.CastItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : defaultImg
                }
                alt={name}
                className={null}
                width="150"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No found</p>
      )}
    </>
  );
}

Cast.propTypes = { movieId: PropTypes.string.isRequired };
