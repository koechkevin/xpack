import React from 'react';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../routes/index';
import '../app.scss';
import store from '../redux/store';

const history = createBrowserHistory();
const App = () =>  (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);
export default App;
