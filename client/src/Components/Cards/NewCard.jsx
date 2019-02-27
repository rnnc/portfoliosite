import React, { Component } from 'react'

export default class NewCard extends Component {

  render() {
    
    // Exception class for ExpressJS logo because it's not an SVG
    // it's a text based logo to have to customize CSS sizing & positioning
    // So a check is performed for the logo file name
    // a classname is applied, and then handled in CSS
    const logo_name = this.props.children[0].type.name;
    const is_ejs = logo_name === "ExpressLogo";

    return (
      <div className="card">

        <div className="inner">

          <div className={ `card-logo ${is_ejs ? 'ejs' : ''}` }>
            { this.props.children[0] }
          </div>

          <div className="title">
            { this.props.children[1] }
          </div>

        </div>

      </div>
    )
  }
}
