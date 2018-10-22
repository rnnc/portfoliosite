import React, { Component } from 'react';

import Intro from './Components/Intro';
import LogosContainer from './Components/Logos/LogosContainer';

import './App.css';

class App extends Component {

  render() {

    return (
      <React.Fragment>

        <Intro />
        <LogosContainer />

      </React.Fragment>
    )

  }
}

export default App;
