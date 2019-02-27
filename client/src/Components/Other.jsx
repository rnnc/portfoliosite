import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import CardContainer from './Cards/Container';

import { OtherLogos } from './LogoStack';

export default class Other extends Component {

  render() {

    return (
      <div className="stack-container">

        <Observer threshold={ 0.3 }>
          { ({ inView, ref }) => {

            const entered = inView ? "enter" : "";
            return (

              <div className="title-container other" ref={ ref }>
                <div className="title">
                  <div className={ `anim-container ${entered}` }>
                    <div className="anim-text">
                      { "Other Software " }
                    </div>
                  </div>
                </div>
              </div>
            )
          } }
        </Observer>

        <CardContainer>
          { OtherLogos }
        </CardContainer>

      </div>
    )
  }
}
