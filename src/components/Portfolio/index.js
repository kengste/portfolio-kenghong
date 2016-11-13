// src/components/Portfolio/index.js
import React, { Component } from 'react';
import ProjectListing from './ProjectListing';

import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Portfolio extends Component {

  render() {
    return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <MuiThemeProvider>
          <ProjectListing />
          </MuiThemeProvider>
        </div>
    );
  }
}
