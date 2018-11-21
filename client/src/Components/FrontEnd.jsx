import React, { Component, Suspense } from 'react'

import Observer from 'react-intersection-observer';


import {
  ReactLogo, ReduxLogo, ApolloLogo, HTMLLogo, CSSLogo, SassLogo
} from './Logos/FrontEndLogos';

import CardContainer from './Cards/Container';

export default class FrontEndCard extends Component {

  render() {

    const FrontEnd = [
      [
        HTMLLogo,
        "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        "HTML5",
        "Latest iteration of the web's markup language"
      ],
      [
        CSSLogo,
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
        "CSS3",
        "Stylesheet language for presentation"
      ],
      [
        SassLogo,
        "https://sass-lang.com/",
        "Sass",
        "Preprocessor scripting language for better & easier styling"
      ],
      [
        ReactLogo,
        "https://reactjs.org/",
        "ReactJS",
        "Facebook's robust front end framework"
      ],
      [
        ReduxLogo,
        "https://redux.js.org/",
        "Redux",
        "State container/provider for webapps"
      ],
      [
        ApolloLogo,
        "https://www.apollographql.com/",
        "Apollo",
        "Front end portion of GraphQL"
      ]
    ];

    const blurbDescription =
      `Using the latest in front end web technology
      gives the ability to make fast, responsive, animated,
      and sleek front ends for web pages`;

    return (
      <Observer threshold={ 0.3 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="masterContainer" ref={ ref }>

              <div className={ `background frontend ${entered}` }>
                {/* <Suspense fallback={ <div>Loading...</div> }>
                  <BGImage></BGImage>
                </Suspense> */}
                stuff
              </div>

              <div className={ `descriptor ${entered}` }>

                <div className="titleContainer frontend">
                  <div className="title">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { "Front End Tech" }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={ `content ${entered}` }>
                <CardContainer cardsType="frontend">
                  { FrontEnd }
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
          );
        } }
      </Observer>
    )
  }
}
