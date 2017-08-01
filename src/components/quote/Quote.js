import React, { Component } from 'react'

import Ionicon from 'react-ionicons'
import './quote.css'

export default class Quote extends Component {
   render() {
      return (
         <div className="quote">
            <div className="row">
               <div className="col-md-offset-2 col-md-8">
                  <p className="contact">Contact us for a free quote!</p>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-4 col-md-4">
                  <p className="info">
                     <Ionicon icon="ion-ios-telephone" fontSize="30px" color="white"/>
                     <br />(435) 723-2266 
                     <br />
                     <span className="bump"></span>
                     <Ionicon icon="ion-ios-email" fontSize="30px" color="white"/>
                     <br />coverupbc@yahoo.com
                  </p>
               </div>
            </div>
         </div>
      )
   }
}