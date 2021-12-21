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

  useEffect(() => {
    fetchSearchingMovies()
      .then(data => data.results)
      .then(results =>
        results.map(({ id, name, original_title, poster_path }) => {
          return {
            id,
            name,
            original_title,
            poster_path,
          };
        }),
      )
      .then(setMovies)
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
    console.log(movies);
  }, []);

  return (
    <div>
      <h1>TTTTTTTTTTTTTTTT</h1>
      <h2>TTTTTTTTTTTTTTTT</h2>
    </div>
  );
};

export default MoviesPage;
