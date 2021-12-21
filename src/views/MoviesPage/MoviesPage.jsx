import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from '../../services/tmdbfilms-api';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const defaultImg = 'https://socialkit.ru/thumbs/crop/406x558/no-image.jpg';

  return (
    <div>
      <h1>TTTTTTTTTTTTTTTT</h1>
      <h2>TTTTTTTTTTTTTTTT</h2>
    </div>
  );
};

export default MoviesPage;
