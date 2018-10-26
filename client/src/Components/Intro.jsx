import React, { Component } from 'react'
import classnames from 'classnames';
import Observer from 'react-intersection-observer';

import './Styles/Intro.scss'

export default class Intro extends Component {

  state = {
    commands: [
      "npm run",
      "node app.js",
      "yarn start"
    ]
  }

  getCommand() {
    const rand = Math.floor(Math.random() * 3);
    return this.state.commands[rand];
  }

  render() {
    return (
      <Observer threshold={ 0.5 }>
        { ({ inView, ref }) => {

          return (
            <div ref={ ref }
              className={ classnames("introWrapper", { "visible": inView }) }
            >

              <div className="codewrapper">

                <div className={ classnames("background", { "visible": inView }) } />

                <div className="prompt" >
                  { " $ " }
                </div>

                <div className={ classnames("text", { "typewriter": inView }) }>
                  { this.getCommand() }
                </div>

                <div className={ classnames("consoleout", { "entered": inView }) }>
                  <div className={ classnames({ "visible": inView }) }>
                    { ` { hello World } ` }
                  </div>
                  <div className={ classnames({ "visible": inView }) }>
                    { " my name is Rohan " }
                  </div>
                </div>

              </div>

            </div>
          )
        } }
      </Observer>
    )
  }
}
