import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import { ReactLogo, ReduxLogo, ApolloLogo } from './FrontEndLogos';
import CardContainer from './CardContainer';

import '../Styles/FrontEndCard.scss';
import '../Styles/Cards.scss';

export default class FrontEndCard extends Component {

  render() {

    const FrontEnd = [ReactLogo, ReduxLogo, ApolloLogo];

    const blurbDescription =
      `Make responsive front end `;

    return (
      <Observer threshold={ 0.3 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="CardContainer" ref={ ref }>

              <div className={ `background ${entered}` } />

              <div className={ `descriptor ${entered}` }>

                <div className="titleContainer">
                  <div className="title">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { "Front End" }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blurbContainer">
                  <div className="blurb">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { blurbDescription }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={ `content ${entered}` }>
                <CardContainer>
                  { FrontEnd }
                </CardContainer>
              </div>

            </div>
          );
        } }
      </Observer>
    )
  }
}
