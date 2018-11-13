import React, { Component } from 'react'

import Card from './Card';

export default class CardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.LogoArray = [...this.props.children];
  }

  handleClick = (index) => {
    const selectState = (index !== this.state.selected) ? index : null;
    this.setState({ selected: selectState });
  }

  render() {
    return (
      <div>
        <div className={`cardContainer ${this.props.cardsType}`}>
          {
            this.LogoArray.map((Logo, i) =>
              <Card
                key={ i } index={ i }
                isActive={ this.state.selected === i }
                onClick={ this.handleClick }
              >
                <Logo />
                { "stuff stuff stuff stuff stuff stuff" }
              </Card>
            )
          }
        </div>
      </div>
    )
  }
}
