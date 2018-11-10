import React, { Component } from 'react';

import Intro from './Components/Intro';
import FrontEnd from './Components/FrontEnd';
import BackEnd from './Components/BackEnd';

import './App.scss';
import './Styles/Intro.scss';
import './Styles/Logos.scss';
import './Styles/CardsContainer.scss';
import './Styles/Cards.scss';

export default class App extends Component {

  render() {
    return (
      <div className="app">

        <section>
          <Intro />
        </section>
        <section>
          <FrontEnd />
        </section>
        <section>
          <BackEnd />
        </section>
      </div>
    )
  }
}