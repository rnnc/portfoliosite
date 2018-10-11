import React, { Component } from 'react';
import './App.css';

import { TweenMax, Power4 } from 'gsap';

import {
  TopContent, BGScreen,
  IntroHeader, IntroPara,
} from './Components/Styled';

import LogoCard from './Components/Logos/LogoCard';

import { 
  ReactLogo, ReduxLogo, 
  ApolloLogo
} from './Components/Logos/FrontEndLogos';

import {
  WebpackLogo, NodeJSLogo, ExpressLogo,
  GraphQlLogo, MongoDBLogo
} from './Components/Logos/BackEndLogos';

import TrackVisibility from 'react-on-screen';

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
          <TrackVisibility partialVisibility>
            {({ isVisible }) => {
              if (isVisible)
                this.introAnimation();
              else {
                TweenMax.staggerTo(['.header', '.paragraph'], 0.1, {
                  opacity: 0
                }, 0.1)
              }
            }}
          </TrackVisibility>
          <IntroHeader className="header">Stuff to fill space</IntroHeader>
          <IntroPara className="paragraph">some stuff that comes before</IntroPara>
        </TopContent>


        <h2 className="descriptor"> Front End Technologies </h2>

        <div className="logo_container">

          <LogoCard>
            <ReactLogo />
          </LogoCard>

          <LogoCard>
            <ReduxLogo />
          </LogoCard>

          <LogoCard>
            <ApolloLogo />
          </LogoCard>

        </div>

        <h2 className="descriptor"> Back End Technologies </h2>

        <div className="logo_container">

          <LogoCard>
            <NodeJSLogo />
          </LogoCard>

          <LogoCard>
            <WebpackLogo />
          </LogoCard>

          <LogoCard>
            <ExpressLogo />
          </LogoCard>

          <LogoCard>
            <GraphQlLogo />
          </LogoCard>

          <LogoCard>
            <MongoDBLogo />
          </LogoCard>

        </div>

      </React.Fragment>
    )

  }
}

export default App;