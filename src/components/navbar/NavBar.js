import React, { Component } from 'react'

import './navbar.css'

export default class NavBar extends Component {
  render(){
    return (
      <div className="row main-nav">
        <div className="col-md-offset-3 col-md-6">
          <div className="col-md-offset-1 col-md-2 nav-link">
            <a href='/catalog'>Catalogs</a>
          </div>
          <div className="col-md-2 nav-link">
            <a href='/shop'>Shops</a>
          </div>
          <div className="col-md-2">
            <a href='/'><img src={ require('../../img/nav-logo.png') } alt="Cover Up"></img></a>
          </div>
          <div className="col-md-2 nav-link">
            <a href='/about'>About</a>
          </div>
          <div className="col-md-2 nav-link">
            <a href='/contact'>Contact</a>
          </div>
        </div>
      </div>
    );
  }
}