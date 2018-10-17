import React, { PureComponent } from 'react'
import classnames from 'classnames';

export default class LogoCard extends PureComponent {

  handleClick = () => this.props.onClick(this.props.index);

  render() {

    const selected = this.props.isActive;

    return (
      <div className={ classnames("logoCard", { selected }) } onClick={ this.handleClick }>

        <div className={ classnames("innerCard", { selected }) }>
          { this.props.children[0] }
        </div>


        <div className={ classnames("info", { selected }) }>
          <div className={ classnames("info-content", { selected }) }>
            { this.props.children[1] }
          </div>
        </div>

      </div >
    )
  }
}
