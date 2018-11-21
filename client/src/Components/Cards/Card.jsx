import React, { Component } from 'react'

export default class Card extends Component {

  handleClick = () => this.props.onClick(this.props.index);

  render() {

    const selected = this.props.isActive ? 'selected' : '';

    return (
      <div className={ `card ${selected}` } >

        <div className={ `inner ${selected}` } onClick={ this.handleClick }>
          { this.props.children[0] }
        </div>

        <div className={ `info ${selected}` } onClick={ this.handleClick }>
          <a
            target="_blank" rel="noopener noreferrer"
            href={ this.props.children[1] }
            className={ `link ${selected}` }
            
          >
            { this.props.children[2] }
          </a>
          <div className={ `textContent ${selected}` }>
            { this.props.children[3] }
          </div>
        </div>

      </div>
    )
  }
}
