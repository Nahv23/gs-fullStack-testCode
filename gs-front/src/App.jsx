import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MAIN_PATH,
  PHONE_PATH
} from './constant/Routes';

import MainScreen from './Components/MainScreen.jsx';
import PhoneInfoScreen from './Components/PhoneInfoScreen.jsx'


import './App.css';

const App = ({ store }) => (

  <Switch>
      <Route path={MAIN_PATH} exact component={MainScreen} />
      <Route path={PHONE_PATH} exact component={PhoneInfoScreen} />
  </Switch>

);

export default App;
