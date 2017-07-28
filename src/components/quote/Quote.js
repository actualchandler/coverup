import React, { Component } from 'react'

import './quote.css'

export default class Quote extends Component {
   render() {
      return (
         <div className="quote">
            <p className="contact">Contact us for a free quote!</p>
            <p className="info">Call us at (435) 723-2266 &nbsp; or &nbsp; Email us at coverupbc@yahoo.com</p>
         </div>
      )
   }
}