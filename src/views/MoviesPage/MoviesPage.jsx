import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from '../../services/tmdbfilms-api';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import './MoviesPage.module.css';

const MoviesPage = () => {
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
      {movies && <ImageGallery movies={movies} />}
    </section>
  );
};

export default MoviesPage;
