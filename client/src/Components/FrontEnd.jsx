import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import {
  ReactLogo, ReduxLogo, ApolloLogo, HTMLLogo, CSSLogo, SassLogo
} from './Logos/FrontEndLogos';

import CardContainer from './Cards/Container';

export default class FrontEndCard extends Component {

  render() {

    const FrontEnd = [HTMLLogo, CSSLogo, SassLogo, ReactLogo, ReduxLogo, ApolloLogo];

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

              <div className={ `background frontend ${entered}` } />

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
