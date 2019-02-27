import React, { Component } from 'react'

import { GithubIcon } from './Logos/ToolsLogos'
import '../Styles/TopBar.scss';

export default class TopBar extends Component {

  scrollToContact(e) {
    e.preventDefault();
    const elem = document.getElementById("end-cont");
    elem.scrollIntoView();
  }

  scrollToStack(e) {
    e.preventDefault();
    const elem = document.getElementById("stack-cont");
    elem.scrollIntoView();
  }

  render() {
    return (

      <nav rol="navigation" className="main-nav">
        <ul>
          <li>
            <a onClick={ this.scrollToStack }>Stack</a>
          </li>
          <li>
            <a onClick={ this.scrollToContact }>Contact</a>
          </li>
          <li>
            <a className="gh-icon"
              href="https://github.com/rnnc" target="_blank"
              rel="noopener noreferrer">
              <GithubIcon className="icon" />
            </a>
          </li>
        </ul>
      </nav>

    )
  }
}

