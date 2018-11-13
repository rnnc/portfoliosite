import React, { Component } from 'react';
import Observer from 'react-intersection-observer';

import { GithubIcon } from './Logos/ToolsLogos';

export default class End extends Component {
  render() {
    return (
      <div className="endContainer">
        <div className="background" />


        <div className="windowContainer">
          <div className="window">
            test test test
          </div>
        </div>

        <div className="gh_icon">
          <div className="iconContainer">
            <GithubIcon />
          </div>
        </div>

      </div>
    );
  }
}