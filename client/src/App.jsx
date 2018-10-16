import React, { Component } from 'react';
import { TweenMax, Power4 } from 'gsap';
import Observer from 'react-intersection-observer';

import './App.css';

import {
  TopContent, BGScreen,
  IntroHeader, IntroPara,
} from './Components/Styled';

import LogosContainer from './Components/Logos/LogosContainer';

class App extends Component {

  introAnimation() {
    TweenMax.fromTo('.header', 0.75, {
      opacity: 0,
      x: -100,
    }, {
        ease: Power4.easeInOut,
        opacity: 1,
        x: 0,
      }
    );

    TweenMax.fromTo('.paragraph', 0.75, {
      opacity: 0,
      x: 200,
    }, {
        ease: Power4.easeInOut,
        opacity: 1,
        x: 0,
      })
  }

  render() {

    return (
      <React.Fragment>


        <TopContent>
          <BGScreen />
          <Observer>
            {({ inView, ref }) => {
              if (inView)
                this.introAnimation();
              else {
                TweenMax.staggerTo(['.header', '.paragraph'], 0.1, {
                  opacity: 0
                }, 0.1)
              }
              return (
                <div ref={ref}>
                  <IntroHeader className="header">Stuff to fill space</IntroHeader>
                  <IntroPara className="paragraph">some stuff that comes before</IntroPara>
                </div>
              )
            }}
          </Observer>
        </TopContent>

        <LogosContainer />




      </React.Fragment>
    )

  }
}

export default App;