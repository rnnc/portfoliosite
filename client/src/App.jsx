import React, { Component } from 'react';

import Intro from './Components/Intro';
import LogosContainer from './Components/Logos/LogosContainer';

import FrontEnd from './Components/Logos/FrontEndCard';
import './App.scss';

export default class App extends Component {

  render() {
    return (

      <React.Fragment>

        <Intro />

        <FrontEnd />

        <LogosContainer />

      </React.Fragment>

    )
  }
}