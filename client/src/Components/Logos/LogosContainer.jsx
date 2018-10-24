import React, { Component } from 'react'

import LogoCard from './LogoCard';

import '../CSS/LogoContainer.css';

import {
  ReactLogo, ReduxLogo,
  ApolloLogo
} from './FrontEndLogos';

import {
  WebpackLogo, NodeJSLogo, ExpressLogo,
  GraphQlLogo, MongoDBLogo
} from './BackEndLogos';

import { Descriptor } from '../Styled';

const FrontEnd = [ReactLogo, ReduxLogo, ApolloLogo];
const BackEnd = [WebpackLogo, NodeJSLogo, ExpressLogo, GraphQlLogo, MongoDBLogo];

const ipsumLorem = "Lorem ipsum dolor sit amet, ne vix movet labore menandri, tantas euismod invidunt mea ut. Quo omnis essent expetendis et, errem ridens repudiare sit eu. No per volumus vituperata ullamcorper, sit sint aperiri aliquid in, perpetua tincidunt in vel. Mei ea imperdiet pertinacia scribentur, no augue eleifend adversarium eos. Id eam oratio detraxit quaestio. Sed officiis persecuti conceptam an, ei eum erant abhorreant."

export default class LogosContainer extends Component {

  state = {
    activeLogo: null
  };

  handleClick = (index) => {

    if (index !== this.state.activeLogo)
      this.setState({ activeLogo: index })
    else
      this.setState({ activeLogo: null });

  }

  render() {

    return (
      <div style={ { background: "radial-gradient(circle, #2c4366, #263a5a, #20314e, #1a2842, #142037)", zIndex: 2 } }>

        <div style={ { padding: "10% 0 10% 0" } }>

          <Descriptor> <div>Front End Technologies</div> </Descriptor>
          <div className="logo_container frontend" >
            {
              FrontEnd.map((Logo, i) => (
                <LogoCard
                  key={ i } index={ i }
                  isActive={ this.state.activeLogo === i }
                  onClick={ this.handleClick }
                >
                  <Logo />
                  { ipsumLorem }
                </LogoCard>
              ))
            }
          </div>

          <Descriptor> <div>Back End Technologies</div> </Descriptor>
          <div className="logo_container backend">
            {
              BackEnd.map((Logo, i) => (
                <LogoCard
                  key={ (i + 3) } index={ (i + 3) }
                  isActive={ this.state.activeLogo === ((i + 3)) }
                  onClick={ this.handleClick }
                >
                  <Logo />
                  { ipsumLorem }
                </LogoCard>
              ))
            }
          </div>

        </div>

      </div>
    )
  }
}
