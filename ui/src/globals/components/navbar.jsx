import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "globals/styles/navbar.css";

export default class Navbar extends Component {
  render() {
    return (<nav className="navbar navbar-expand-lg navbar-zork">
      <Link className="navbar-brand" to="/">
        dungeon
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="">
            <a href="https://github.com/pmpbar/zork" className="link-zork">
                about
            </a>
          </li>
        </ul>
      </div>
    </nav>);
  }
}

