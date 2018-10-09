import React, { Component } from 'react'
import classnames from 'classnames';

import Collapse from 'react-collapse';

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

    const { selected } = this.state;

    return (
      <div
        className={classnames("logoCard", { selected })}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
        <div className="info" hidden={!selected}>
          yo
        </div>
      </div>
    )
  }
}
