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

  render() {

    return (
      <React.Fragment>

        <h2 className="descriptor"> Front End Technologies </h2>

        <div className="logo_container frontend" >

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

        <div className="logo_container backend">

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

          <LogoCard classType="backend">
            <MongoDBLogo />
          </LogoCard>

        </div>

      </React.Fragment>
    )
  }
}
