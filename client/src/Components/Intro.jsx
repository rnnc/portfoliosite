import { TweenMax, Back } from 'gsap';
import React, { Component } from 'react'
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

import { TopContent} from './Styled';

import './CSS/Intro.css'

export default class Intro extends Component {

  animation(inView) {
    if (inView) {
      setTimeout(() => {
        TweenMax.fromTo('.consoleout', 1, { x: 1000 },
          { x: 0, display: "inline-block", ease: Back.easeOut.config(1) });
      }, 2000);

      /*  setTimeout(() => {
         TweenMax.fromTo('.consoleout>div', 2, { opacity: 0 }, { opacity: 1 });
       }, 2500); */
    } else
      TweenMax.to('.consoleout', .25, { x: 1000, display: "none" })
  }

  render() {
    return (
      <TopContent>
        <Observer threshold="1" triggerOnce>
          { ({ inView, ref }) => {

            this.animation(inView);

            return (
              <div className="codewrapper" ref={ ref }>

                <div className="background" />

                <div className="prompt" >
                  { " >>" }
                </div>

                <div className={ classnames("text", { "typewriter": inView }) }>
                  { " node app.js " }
                </div>

                <div className="consoleout">
                  <div className={ classnames({ "visible": inView }) }> { ` { hello World } ` }</div>
                  <div className={ classnames({ "visible": inView }) }> { " My name is Rohan " }</div>
                </div>

              </div>
            )
          } }
        </Observer>
      </TopContent>
    )
  }
}
