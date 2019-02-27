import React, { Component } from 'react'

import NewCard from './NewCard';

export default class CardContainer extends Component {

  constructor(props) {
    super(props);
    this.LogoArray = [...this.props.children];
  }
  render() {
    return (
      
        <div className={ `cardContainer` }>
          {
            this.LogoArray.map((LogoData, i) => {
              const [Logo, title] = LogoData;
              return (
                <NewCard key={ i } index={ i } >
                  { <Logo /> }
                  { title }
                </NewCard>
              )
            })
          }
        </div>
      
    )
  }
}
