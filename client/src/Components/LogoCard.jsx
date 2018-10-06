import React, { Component } from 'react'
import classnames from 'classnames';

export default class LogoCard extends Component {
  state = {
    selected: false
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      selected: this.state.selected ? false : true
    })
  }

  render() {
    return (
      <div
        className={classnames("logoCard", { selected: this.state.selected })}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
        <div className="info" hidden={!this.state.selected}>
        </div>
      </div>
    )
  }
}
