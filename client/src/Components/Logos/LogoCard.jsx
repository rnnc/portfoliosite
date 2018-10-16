import React, { PureComponent } from 'react'
import classnames from 'classnames';

export default class LogoCard extends PureComponent {

  state = {
    selected: false
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ selected: !this.state.selected })
  }

  render() {

    const { selected } = this.state;

    return (
      <div onClick={this.handleClick.bind(this)}
        className={classnames("logoCard", `${this.props.classType}`, { selected })} >

        <div className={classnames("innerCard", { selected })}>
          {this.props.children}
        </div>


        <div className={classnames("info", { selected })}>
          <div>Info</div>
        </div>

      </div >
    )
  }
}
