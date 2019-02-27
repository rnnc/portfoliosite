import React, { Component } from 'react'

import Observer from 'react-intersection-observer';

import CardContainer from './Cards/Container';

import { WebDevStack } from './LogoStack';

export default class FrontEndCard extends Component {

  render() {

    return (

      <div className="stack-container">

        <Observer threshold={ 0.3 }>
          { ({ inView, ref }) => {

            const entered = inView ? "enter" : "";
            return (

              <div id="stack-cont" className="title-container" ref={ ref }>
                <div className="title">
                  <div className={ `anim-container ${entered}` }>
                    <div className="anim-text">
                      { "Web Dev Stack " }
                    </div>
                  </div>
                </div>
              </div>
            )
          } }
        </Observer>

        <CardContainer>
          { WebDevStack }
        </CardContainer>

      </div>
    )
  }
}