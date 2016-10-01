import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Navbar from './components/Navbar';
import BeerBoard from './components/BeerBoard';
// import ViewDetail from './components/ViewDetail';

render(
  <Router history = {browserHistory}>
    <Route path = '/' component = {Navbar}>
      <Route path = 'beers' component = {BeerBoard} />
    </Route>
  </Router>,
  document.getElementById('root')
)

{/* <Route path = 'view' component = {ViewDetail}/> */}
