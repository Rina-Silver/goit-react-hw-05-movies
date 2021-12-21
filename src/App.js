import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';

import s from './App.module.css';
import HomePage from 'views/HomePage';
import MoviesPage from 'views/MoviesPage';
import NotFoundPage from 'views/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className={s.Container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
