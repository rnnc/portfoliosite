import React, { Component } from 'react'
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

import '../Styles/FrontEndCard.scss';

export default class FrontEndCard extends Component {

  render() {

    return (
      <Observer threshold={ 0.1 }>
        { ({ inView, ref }) => {
          return (
            <div className="CardContainer" ref={ ref }>

              <div className={ classnames("background", { "enter": inView }) } />

              <div className={ classnames("descriptor", { "enter": inView }) }>
                <div className="title">
                  { "Front End" }
                </div>
                <div className="blurb">
                  { " Ipsem Lorem " }
                </div>
              </div>
              <div className={ classnames("content", { "enter": inView }) }>

              </div>
            </div>)
        } }
      </Observer>
    )
  }
}
