import React from "react";
import {Provider} from 'react-redux';
import NavBar from "./NavBar";
import store from '../redux/store';

const App = () =>  (
  <Provider store={store}>
    <NavBar />
  </Provider>
);


export default App;
