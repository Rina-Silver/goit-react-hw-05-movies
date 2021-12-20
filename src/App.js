import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from 'views/HomePage';
import s from './App.module.css';

function App() {
  return (
    <div className={s.Container}>
      <AppBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
