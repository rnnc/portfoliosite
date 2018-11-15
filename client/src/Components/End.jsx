import React, { Component } from 'react';
import Observer from 'react-intersection-observer';

import { GithubIcon } from './Logos/ToolsLogos';

export default class End extends Component {
  render() {
    const githubLink = "https://github.com/rnnc/portfoliosite";
    return (
      <Observer thershold={ 1 }>
        { ({ inView, ref }) => {
          const visible = inView ? 'visible' : '';
          return (
            <div className="endContainer">

              <div className="background" />

              <div className="windowContainer" ref={ ref }>
                <div className={ `window ${visible}` }>
                  <div className="text">
                    { "Want to see the code for this site?" }
                  </div>
                </div>
              </div>

              <a className="gh_icon" href={ githubLink } rel="noopener noreferrer" target="_blank">
                <div className="iconContainer">
                  <GithubIcon />
                </div>
              </a>

            </div>
          )
        } }

      </Observer>
    );
  }
}