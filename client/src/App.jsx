import React, { Component } from 'react';

import TopBar from './Components/TopBar';
import Intro from './Components/Intro';
import WebDevStack from './Components/WebDevStack';
import Other from './Components/Other';
import End from './Components/End';

import './App.scss';
import './Styles/Intro.scss';
import './Styles/Logos.scss';
import './Styles/Cards.scss';
import './Styles/End.scss';

import './Styles/StackContainer.scss';

export default class App extends Component {

  render() {
    return (
      <div className="app">

        <TopBar />

        <Intro />

        <WebDevStack />


        <Other />

        <End /> 

        {/* <div className="toTop"
          style={ {
            position: "fixed", zIndex: "2", bottom: "2em", left: "1em",
            fontSize: "1.3em", fontWeight: "600", color: "red",
            opacity: 0
          } }
        >
          {"TOP"}
        </div> */}

      </div>
    )
  }
}