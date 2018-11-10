import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import {
  NodeJSLogo, WebpackLogo, ExpressLogo, GraphQlLogo, MongoDBLogo
} from './Logos/BackEndLogos';

import CardContainer from './Cards/Container';

export default class BackEnd extends Component {
  render() {

    const BackEnd = [NodeJSLogo, WebpackLogo, ExpressLogo, GraphQlLogo, MongoDBLogo];

    const blurbDescription =
      `Make robust efficient back end servers
      using latest in NodeJS & database querying`;

    return (
      <Observer threshold={ 0.3 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="masterContainer" ref={ ref }>

              <div className={ `background backend ${entered}` } />

              <div className={ `descriptor ${entered}` }>

                <div className="blurbContainer">
                  <div className="blurb">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { blurbDescription }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="titleContainer">
                  <div className="title">
                    <div className={ `animationContainer ${entered}` }>
                      <div className="animationText">
                        { "Back End" }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={ `content ${entered}` }>
                <CardContainer>
                  { BackEnd }
                </CardContainer>
              </div>

            </div>
          )
        } }
      </Observer>
    )
  }
}
