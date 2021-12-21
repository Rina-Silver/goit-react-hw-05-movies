import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';

import s from './App.module.css';
import HomePage from 'views/HomePage';
import MoviesPage from 'views/MoviesPage';
import NotFoundPage from 'views/NotFoundPage';
import MovieDetailsPage from 'views/MovieDetailsPage';

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
        <Route path="/movies/:moviesId">
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
