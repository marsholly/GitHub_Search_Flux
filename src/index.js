import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Navbar from './components/Navbar';
import TopRepoBoard from './components/TopRepoBoard';
import TopUserBoard from './components/TopUserBoard';
import CHBoard from './components/CHBoard';

render(
  <Router history = {browserHistory}>
    <Route path = '/' component = {Navbar}>
      <Route path = 'topRepo' component = {TopRepoBoard} />
      <Route path = 'topUser' component = {TopUserBoard} />
      <Route path = 'ch' component = {CHBoard} />
    </Route>
  </Router>,
  document.getElementById('root')
)

{/* <Route path = 'view' component = {ViewDetail}/> */}
