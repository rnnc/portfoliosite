import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

export default class Intro extends Component {

  commands = [
    "npm run",
    "node app.js",
    "yarn start"
  ]

  getCommand() {
    const rand = Math.floor(Math.random() * 3);
    return this.commands[rand];
  }

  render() {
    return (
      <Observer threshold={ 0.5 }>
        { ({ inView, ref }) => {
          const visible = inView ? "visible" : "";
          return (
            <div className={ `introWrapper ${visible}` }>

              <div className={ `background ${visible}` } />

              <div className="codewrapper" ref={ ref }>
                <div className="prompt" >
                  { " $ " }
                </div>
                <div className={ `text ${visible}` }>
                  { inView ? this.getCommand() : "" }
                </div>
              </div>

              <div className={ `consoleout ${visible}` }>
                <span className={ visible }>
                  { ` { hello World } ` }
                </span>
                <span className={ visible }>
                  { " my name is Rohan " }
                </span>
              </div>

            </div>
          )
        } }
      </Observer>
    )
  }
}
