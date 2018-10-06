import React, { Component } from 'react';
import './App.css';

import { TweenMax, Power4 } from 'gsap';

import {
  TopContent, BGScreen,
  IntroHeader, IntroPara,
} from './Components/Styled';

import LogoCard from './Components/Logos/LogoCard';

import { ReactLogo, ReduxLogo, ApolloLogo } from './Components/Logos/FrontEndLogos';

import {
  WebpackLogo, NodeJSLogo, ExpressLogo,
  GraphQlLogo, MongoDBLogo
} from './Components/Logos/BackEndLogos';

import TrackVisibility from 'react-on-screen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      logoDescrip: false
    };

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    const tState = this.state.logoDescrip ? false : true;
    this.setState({
      logoDescrip: tState
    });
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

          <div className="logoCard">
            <NodeJSLogo />
          </div>

          <div className="logoCard">
            <WebpackLogo />
          </div>

          <div className="logoCard">
            <ExpressLogo />
          </div>

          <div className="logoCard">
            <GraphQlLogo />
          </div>

          <div className="logoCard">
            <MongoDBLogo />
          </div>

        </div>

        <h2 className="descriptor">Other</h2>

        <div className="logo_container">

          <div className="logo_container">
            <label>Stuff</label>
          </div>
          <div className="logo_container">
            <label>Stuff</label>
          </div>
          <div className="logo_container">
            <label>Stuff</label>
          </div>

        </div>

      </React.Fragment>
    )

  }
}

export default App;