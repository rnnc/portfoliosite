import { TimelineMax, Power4 } from 'gsap';
import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import TextSplitr from 'textsplitr';

import { TopContent, BGScreen } from './Styled';

export default class Intro extends Component {

  animation() {
  }

  render() {
    return (
      <TopContent>
        <BGScreen />
        <Observer>
          { ({ inView, ref }) => {
            this.animation();
            return (
              <div className="codewrapper" ref={ ref }>
                <div className="background" />
                <div className="text">
                  { ">> node app.js" }
                </div>
                <span className="cursor">{ "|" }</span>
              </div>
            )
          } }
        </Observer>
      </TopContent>
    )
  }
}
