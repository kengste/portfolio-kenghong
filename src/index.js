import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';

ReactDOM.render(

  <div>
    <Routes history={browserHistory} />
  </div>,
  document.getElementById('root')
);
