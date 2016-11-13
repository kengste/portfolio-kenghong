// src/components/Portfolio/index.js
import React, { Component } from 'react';

import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }};

export default class About extends Component {

  render() {
    return (
      <div>
      <br />
      <br />
      <br />
      <br />
      <br />


      <div style={styles.root}>
      <span className="Loader">
      <div className="Loader-indicator" >
      <h1>
      <span>Loading</span>
      <br />
      <br />
        <img className="img" height="200" width="150" alt="profile" src="/profile.jpg" />

      <span>Generalist</span>
      <br />

      <span>Minimalist</span>
      <br />

      <br />


      <span className="Loader-ellipsis" >
      <span className="Loader-ellipsisDot">.</span>
      <span className="Loader-ellipsisDot">.</span>
      <span className="Loader-ellipsisDot">.</span>
      </span>
      </h1>
      </div>
      </span>
      </div>
      </div>
    );
    }
  }
