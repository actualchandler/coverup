import React, { Component } from 'react'
import './navbar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="row main-nav">
        <ul>
          <li><a href='/catalog'>Catalog</a></li>
          <li><a href='https://www.agpestores.com/coverup/groups.php' target="_blank">Shop</a></li>
          <li><a href='/'><img src={require('../../img/nav-logo.png')} alt="Cover Up"></img></a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;