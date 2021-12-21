import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from '../../services/tmdbfilms-api';
import s from './Reviews.module.css';
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
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
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={null}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={null}>
              <h3 className={null}>{`Author: ${author}`}</h3>
              <p className={null}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
  );
}
