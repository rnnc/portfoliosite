import React, { Component } from 'react'

export default class Card extends Component {

  handleClick = () => this.props.onClick(this.props.index);

  render() {

    const selected = this.props.isActive ? 'selected' : '';

    return (
      <div className={ `card ${selected}` } >

        <div className={ `inner ${selected}` } onClick={ this.handleClick }>
          { (Array.isArray(this.props.children)) ? this.props.children[0] : '' }
        </div>

        <div className={ `info ${selected}` } onClick={ this.handleClick }>
          <div className={ `textContent ${selected}` }>
            { (Array.isArray(this.props.children)) ? this.props.children[1] : '' }
          </div>
        </div>

      </div>
    )
  }
}
