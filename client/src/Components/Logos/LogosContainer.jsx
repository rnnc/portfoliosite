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

          <LogoCard index={ 0 } isActive={ this.state.activeLogo === 0 } onClick={ this.handleClick }>
            <ReactLogo />
          </LogoCard>


          <LogoCard index={ 1 } isActive={ this.state.activeLogo === 1 } onClick={ this.handleClick }>
            <ReduxLogo />
          </LogoCard>

          <LogoCard index={ 2 } isActive={ this.state.activeLogo === 2 } onClick={ this.handleClick }>
            <ApolloLogo />
          </LogoCard>

        </div>

        <h2 className="descriptor"> Back End Technologies </h2>
        <div className="logo_container backend">

          <LogoCard index={ 3 } isActive={ this.state.activeLogo === 3 } onClick={ this.handleClick }>
            <NodeJSLogo />
          </LogoCard>

          <LogoCard index={ 4 } isActive={ this.state.activeLogo === 4 } onClick={ this.handleClick }>
            <WebpackLogo />
          </LogoCard>

          <LogoCard index={ 5 } isActive={ this.state.activeLogo === 5 } onClick={ this.handleClick }>
            <ExpressLogo />
          </LogoCard>

          <LogoCard index={ 6 } isActive={ this.state.activeLogo === 6 } onClick={ this.handleClick }>
            <GraphQlLogo />
          </LogoCard>

          <LogoCard index={ 7 } isActive={ this.state.activeLogo === 7 } onClick={ this.handleClick }>
            <MongoDBLogo />
          </LogoCard>

        </div>

      </React.Fragment>
    )
  }
}
