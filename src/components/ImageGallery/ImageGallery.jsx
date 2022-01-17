import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGallery({ movies }) {
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';

  //для вложенной навигации исп url в useRouteMatch
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
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
              <h3 className={s.MovieTitle}>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
