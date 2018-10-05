import React, { Component } from 'react'

import classnames from 'classnames';

export default class GridCol extends Component {

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
        className={classnames("col", { selected: this.state.selected })}
        onClick={this.handleClick.bind(this)}
      >

        {this.props.children}

        <div className="info" hidden={this.state.selected}>
          <div>hell</div>
        </div>

      </div>
    )
  }
}

/*         {() => {
          return (
            (this.state.selected)
              ? <React.Fragment>
                {this.props.children}
              </React.Fragment>
              : <React.Fragment>
                {this.props.children}
                <div className="info">
                  Some stuff over here
                </div>
              </React.Fragment>
          );
        }} */