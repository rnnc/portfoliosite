import React, { Component } from 'react'

import { GithubIcon } from './Logos/ToolsLogos'
import '../Styles/TopBar.scss';

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

