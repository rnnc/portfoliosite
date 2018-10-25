import React, { Component } from 'react';

import Intro from './Components/Intro';
import LogosContainer from './Components/Logos/LogosContainer';

import FrontEnd from './Components/Logos/FrontEndCard';
import { BGScreen } from './Components/Styled';
import './App.css';

export default class App extends Component {

  render() {
    return (

      <React.Fragment>

        <BGScreen />

        <Intro />

        <FrontEnd />

        <LogosContainer />

      </React.Fragment>

    )
  }
}