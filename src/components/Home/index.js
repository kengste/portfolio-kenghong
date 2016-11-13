// src/components/Portfolio/index.js
import React, { Component } from 'react';

import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }};

export default class Home extends Component {

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
      <span className="Loader-ellipsis" >
      <span className="Loader-ellipsisDot"></span>
      <span className="Loader-ellipsisDot"></span>
      <span className="Loader-ellipsisDot"></span>
      <br />
      <span className="Loader-ellipsisDot">i</span>
      <span className="Loader-ellipsisDot">.</span>
      <span className="Loader-ellipsisDot">b</span>
      <span className="Loader-ellipsisDot">i</span>
      <span className="Loader-ellipsisDot">n</span>
      <span className="Loader-ellipsisDot">d</span>
      <span className="Loader-ellipsisDot">(</span>
      <span className="Loader-ellipsisDot">t</span>
      <span className="Loader-ellipsisDot">h</span>
      <span className="Loader-ellipsisDot">i</span>
      <span className="Loader-ellipsisDot">s</span>
      <span className="Loader-ellipsisDot">)</span>

      </span>

      </h1>
      <h6>FULL STACK GENERALIST || MINIMALIST || COFFEE ENTHUSIAST</h6>
      Hello! I am a <s>former auditor turned</s> web developer. Over 12 weeks of coding at a coding bootcamp by General Assembly<br />
      Singapore, I have become familiar with tech stacks such as JavaScript, Node.js, Express, Ruby on Rails, Postgres and more.<br />
    I am especially enthused over the use of <b>Ruby on Rails</b> and <b>React.js</b> in web development and would relish the opportunity<br />
      to talk to anyone who shares a common passion for either stack.<br />
       <br />
       If you have a question or just want to say hi, drop me an email and let's talk.
      </div>
      </span>
      </div>

      </div>
    );
    }
  }
