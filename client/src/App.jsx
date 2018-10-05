import React, { Component } from 'react';
import './App.css';

import { TweenMax, Power4 } from 'gsap';

import {
  TopContent, BGScreen,
  IntroHeader, IntroPara,
} from './Components/Styled';

import LogoCard from './Components/LogoCard';

import { ReactLogo, ReduxLogo, ApolloLogo } from './FrontEndLogos';

import {
  WebpackLogo, NodeJSLogo, ExpressLogo,
  GraphQlLogo, MongoDBLogo
} from './BackEndLogos';

import TrackVisibility from 'react-on-screen';
import GridCol from './Components/GridCol';

class App extends Component {

  constructor() {
    super();
    this.state = {
      logoDescrip: false
    };
  }

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
          <TrackVisibility partialVisibility>
            {({ isVisible }) => {

              if (isVisible)
                this.introAnimation();
              else
                TweenMax.staggerTo(['.header', '.paragraph'],
                  0.1, { opacity: 0 }, 0.1);

            }}
          </TrackVisibility>
          <IntroHeader className="header">Stuff to fill space</IntroHeader>
          <IntroPara className="paragraph">some stuff that comes before</IntroPara>
        </TopContent>


        <h2 className="descriptor"> Front End Technologies </h2>

        <div className="grid">
          <GridCol><ReactLogo /></GridCol>
          <GridCol><ReduxLogo /></GridCol>
          {/* <div className="col"><ReduxLogo /></div> */}
          <div className="col"><ApolloLogo /></div>
          <div className="col"><ExpressLogo /></div>
        </div>

      </React.Fragment>
    )

  }
}

export default App;