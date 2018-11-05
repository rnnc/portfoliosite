import React, { Component } from 'react';

import Intro from './Components/Intro';
import FrontEnd from './Components/Logos/FrontEndCard';

import './App.scss';

export default class App extends Component {

  render() {
    return (
      <div className="app">

        <Intro />

        <FrontEnd />
    
      </div>
    )
  }
}