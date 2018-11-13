import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import CardContainer from './Cards/Container';

import { WebpackLogo, VSCodeLogo, BabelLogo, GitLogo, GithubLogo, HerokuLogo } from './Logos/ToolsLogos';

export default class Tools extends Component {

  render() {

    const Tools = [WebpackLogo, BabelLogo, VSCodeLogo, GitLogo, GithubLogo, HerokuLogo];

    const blurbDescription =
      `Tools/Services that I'm proficient in`;

    return (
      <Observer threshold={ 0.3 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="masterContainer" ref={ ref }>

              <div className={ `background tools ${entered}` } />

              <div className={ `descriptor ${entered}` }>

                <div className="titleContainer">
                  <div className="title">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { "Tools" }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={ `content ${entered}` }>
                <CardContainer>
                  { Tools }
                </CardContainer>
              </div>

              <div className="blurbContainer">
                <div className="blurb">
                  <div className="bg" />
                  <div className="blurbText">
                    { blurbDescription }
                  </div>
                </div>
              </div>

            </div>
          )
        } }
      </Observer>
    )
  }
}
