import React, { Component } from 'react';

import Intro from './Components/Intro';
import FrontEnd from './Components/FrontEnd';
import BackEnd from './Components/BackEnd';
import Tools from './Components/Tools';
import Other from './Components/Other';
import End from './Components/End';

import './App.scss';
import './Styles/Intro.scss';
import './Styles/Logos.scss';
import './Styles/CardsContainer.scss';
import './Styles/Cards.scss';
import './Styles/End.scss';

export default class App extends Component {

  render() {
    return (
      <div className="app">

        <Intro />

        <FrontEnd />

        <BackEnd />

        <Tools />

        <Other />

        <End />

      </div>
    )
  }
}