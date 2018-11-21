import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import CardContainer from './Cards/Container';

import { WebpackLogo, VSCodeLogo, BabelLogo, GitLogo, GithubLogo, HerokuLogo } from './Logos/ToolsLogos';

export default class Tools extends Component {

  render() {

    const Tools = [
      [
        WebpackLogo,
        "https://webpack.js.org/",
        "Webpack",
        "Module transformer & bundler"
      ],
      [
        BabelLogo,
        "https://babeljs.io/",
        "Babel",
        "Javascript compiler and transpiler"
      ],
      [
        VSCodeLogo,
        "https://code.visualstudio.com/",
        "Visual Studio Code",
        "Robust open source code editor"
      ],
      [
        GitLogo,
        "https://git-scm.com/",
        "Git",
        "Version control system for source code management"
      ],
      [
        GithubLogo,
        "https://github.com/rnnc",
        "Github",
        "Web hosting service for source code"
      ],
      [
        HerokuLogo,
        "https://www.heroku.com/",
        "Heroku",
        "Cloud platform as a service for server hosting"
      ]
    ];

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
