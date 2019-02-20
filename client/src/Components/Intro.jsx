import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

import '../Styles/TopBar.scss';
import TopBar from './TopBar';

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
              <div className={ `introWrapper ${visible}` } >

                <div className={ `background ${visible}` } />

                <TopBar />

                <br/>

                <div className="codewrapper" ref={ ref } >
                  <div className="prompt" >
                    { " $ " }
                  </div>
                  <div className={ `text ${visible}` }>
                    { inView ? this.getCommand() : "" }
                  </div>
                </div>

                <div className={ `consoleout ${visible}` }>
                  <div className="topbar">
                    <span className="exit">
                      <div className="cross">
                        { "╳" }
                      </div>
                    </span>
                    <span className="expand">
                      { "☐" }
                    </span>
                    <span className="minimize">
                      { "—" }
                    </span>
                  </div>

                  <span>
                    <span className="bracket">{ "{ " }</span>
                    <span className="hw">hello World</span>
                    <span className="bracket">{ " }" }</span>
                  </span>
                  <span>
                    <span className="intro_name">{ "my name is " }</span>
                    <span className="name">{ " Rohan" }</span>
                  </span>
                </div>

              </div>
            )
          } }
        </Observer>
      
    )
  }
}
