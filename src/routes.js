// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import Header from './components/Header';
import CommentBox from './components/App/CommentBox';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
  <Route path="/header" component={Header}>
    <Route path="/" component={CommentBox} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
