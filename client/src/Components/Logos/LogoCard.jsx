import React, { PureComponent } from 'react'
import classnames from 'classnames';

export default class LogoCard extends PureComponent {

  handleClick = () => this.props.onClick(this.props.index);

  render() {

    const selected = this.props.isActive;

    return (
      <div onClick={ this.handleClick }
        className={ classnames("logoCard", { selected }) } >

        <div className={ classnames("innerCard", { selected }) }>
          { this.props.children }
          { console.log(this.props.children[1]) }
        </div>


        <div className={ classnames("info", { selected }) }>
          <div className={ classnames("info-content", { selected }) }>
            { "Lorem ipsum dolor sit amet, ne vix movet labore menandri, tantas euismod invidunt mea ut. Quo omnis essent expetendis et, errem ridens repudiare sit eu. No per volumus vituperata ullamcorper, sit sint aperiri aliquid in, perpetua tincidunt in vel. Mei ea imperdiet pertinacia scribentur, no augue eleifend adversarium eos. Id eam oratio detraxit quaestio. Sed officiis persecuti conceptam an, ei eum erant abhorreant." }
          </div>
        </div>

      </div >
    )
  }
}
