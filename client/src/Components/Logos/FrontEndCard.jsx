import React, { Component } from 'react'
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

import '../Styles/FrontEndCard.scss';

export default class FrontEndCard extends Component {

  render() {

    return (
      <Observer threshold={ 0.2 }>
        { ({ inView, ref }) => {
          const entered = inView ? "enter" : "";
          return (
            <div className="CardContainer" ref={ ref }>

              <div className={ `background ${entered}` } />

              <div className={ `descriptor ${entered}` }>
                <div className={ `title ${entered}` }>
                  { "Front End" }
                </div>
                <div className={ `blurb ${entered}` }>
                  { " Ipsem Lorem " }
                </div>
              </div>
              <div className={ `content ${entered}` }>

              </div>
            </div>)
        } }
      </Observer>
    )
  }
}
