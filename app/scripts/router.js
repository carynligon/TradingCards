import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Login from './components/login';
import CardList from './components/card-list';
import CardPage from './components/card-page';

const AppRouter = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/" component={CardList}/>
    <Route path="/:id" component={CardPage}/>
  </Router>
)

export default AppRouter;
