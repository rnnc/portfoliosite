import React, { PureComponent } from 'react'
import classnames from 'classnames';

export default class LogoCard extends PureComponent {
  state = {
    logoDescrip: false
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      logoDescrip: this.state.logoDescrip ? false : true
    })
  }

  render() {
    return (
      <div
        className={classnames("logoCard", { selected: this.state.logoDescrip })}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
        <div className="info">
          
        </div>
      </div>
    )
  }
}
