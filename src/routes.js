// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import About from './components/About';


const Routes = (props) => (
  <Router {...props}>
  <Route path="/header" component={Header}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
