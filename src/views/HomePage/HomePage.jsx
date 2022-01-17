import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from '../../services/tmdbfilms-api';
import ImageGallery from 'components/ImageGallery';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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

          <ImageGallery movies={movies} />
        </>
      )}
    </section>
  );
}
