import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';

import s from './App.module.css';
const HomePage = lazy(() => import('views/HomePage'));
const MoviesPage = lazy(() => import('views/MoviesPage'));
const NotFoundPage = lazy(() => import('views/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));

function App() {
  return (
    <div className={s.Container}>
      <AppBar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
