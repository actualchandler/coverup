import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

import Ionicon from 'react-ionicons'
import './navbar.css'

class NavBar extends Component {
  render(){
    return (
      <div className="row main-nav">
        <div className="col-md-offset-3 col-md-1 nav-link">
          <a href='/catalog'>Catalogs</a>
        </div>
        <div className="col-md-1 nav-link">
          <a href='/shop'>Shop</a>
        </div>
        <div className="col-md-1">
          <a href='/home'><img src={ require('../../img/nav-logo.png') } alt="Cover Up"></img></a>
        </div>
        <div className="col-md-1 nav-link">
          <a href='/about'>About</a>
        </div>
        <div className="col-md-1 nav-link">
          <a href='/contact'>Contact</a>
        </div>
        <div className="col-md-offset-2 col-md-2 account">
             <a href='/profile'>Your Account</a><Ionicon icon="ion-android-person" fontSize="45px" color="white"/>
        </div>
      </div>
    );
  }
}

export default NavBar;