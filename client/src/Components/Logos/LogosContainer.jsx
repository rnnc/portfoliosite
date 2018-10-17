import React, { Component } from 'react'

import LogoCard from './LogoCard';

import './LogoContainer.css';

import {
  ReactLogo, ReduxLogo,
  ApolloLogo
} from './FrontEndLogos';

import {
  WebpackLogo, NodeJSLogo, ExpressLogo,
  GraphQlLogo, MongoDBLogo
} from './BackEndLogos';

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
      <React.Fragment>

        <h2 className="descriptor"> Front End Technologies </h2>
        <div className="logo_container frontend" >
          {
            FrontEnd.map((Logo, i) => (
              <LogoCard
                key={ i } index={ i }
                isActive={ this.state.activeLogo === i }
                onClick={ this.handleClick }
              >
                <Logo />
                {ipsumLorem}
              </LogoCard>
            ))
          }
        </div>

        <h2 className="descriptor"> Back End Technologies </h2>
        <div className="logo_container backend">
          {
            BackEnd.map((Logo, i) => {
              const l = i + 3;
              return (
                <LogoCard
                  key={ l } index={ l }
                  isActive={ this.state.activeLogo === (l) }
                  onClick={ this.handleClick }
                >
                  <Logo />
                  {ipsumLorem}
                </LogoCard>
              )
            })
          }
        </div>

      </React.Fragment>
    )
  }
}
