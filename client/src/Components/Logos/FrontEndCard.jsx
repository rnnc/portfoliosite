import React, { Component } from 'react'
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

import '../CSS/FrontEndCard.css';

export default class FrontEndCard extends Component {

  render() {

    return (
      <Observer threshold={0.1}>
        { ({ inView, ref }) => {
          return (
            <div className="CardContainer" ref={ ref }>
              <div className={ classnames("descriptor", { "enter": inView }) }>
                { "Front End" }
              </div>
              <div className="content">
                { "Stuff and things" }
              </div>
            </div>)
        } }
      </Observer>
    )
  }
}
