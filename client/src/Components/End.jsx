import React, { Component } from 'react';
import Observer from 'react-intersection-observer';

import { GithubIcon } from './Logos/ToolsLogos';

export default class End extends Component {
  render() {
    const githubLink = "https://github.com/rnnc/portfoliosite";
    const myEmail = "rohan_choudhary@live.com";
    return (
      <Observer thershold={ 0.9 }>
        { ({ inView, ref }) => {
          const visible = inView ? 'visible' : '';
          return (
            <div className="endContainer">

              <div className="background" />

              <div className="ghClickout">
                <div className="text">
                  { "Want to see how this site is coded?" }
                </div>
                <div className="link">
                  <div className="icon">
                    <a
                      href={ githubLink } target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>
              </div>

              <div className="emailWindow" ref={ ref }>
                <div className={ `box ${visible}` }>
                  <div className={ `text ${visible}` }>
                    Contact Me Here
                  </div>
                  <div className={ `email ${visible}` }>
                    { myEmail }
                  </div>
                </div>
              </div>

            </div>
          )
        } }
      </Observer>
    );
  }
}