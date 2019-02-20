import React, { Component } from 'react'

import { GithubIcon } from './Logos/ToolsLogos'

export default class TopBar extends Component {

  scrollTo(e) {
    e.preventDefault();
    const elem = document.getElementById("end-cont")
    elem.scrollIntoView();
  }

  render() {
    return (

      <nav rol="navigation" class="main-nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#" onClick={ this.scrollTo }>Contact</a>
          </li>
          <li>
            <a className="gh-icon" href="#" >
              <GithubIcon className="icon" />
            </a>
          </li>
        </ul>
      </nav>

    )
  }
}

/*

      <div className="nav">
        <ul className="top-bar">
          <li>
            <span className="gh-scroll" onClick={ this.scrollTo }>
              <GithubIcon />
            </span>
          </li>
          <li><span>Contact</span></li>
          <li><span>About</span></li>
        </ul>
      </div>


*/