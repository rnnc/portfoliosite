import React, { PureComponent } from 'react'
import classnames from 'classnames';

export default class LogoCard extends PureComponent {

  handleClick = () => this.props.onClick(this.props.index);

  render() {

    const selected = this.props.isActive;

    return (
      <div onClick={this.handleClick}
        className={classnames("logoCard", { selected })} >

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
