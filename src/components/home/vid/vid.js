import React, { Component } from 'react'

import './vid.css'

export default class Vid extends Component{
   render() {
      return (
         <div className="vid">
            <div className="row">
               <div className="col-md-offset-2 col-md-8">
                  <p className="intro">We print quality products with the highest standards</p>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-3 col-md-6">
                  <iframe className="vid-border" width="100%" height="350" frameBorder="0" seamless="seamless" src="https://www.youtube.com/embed/M1FBGHxHwsI" allowFullScreen></iframe>
               </div>
               <div className="col-md-offset-2 col-md-8">
                  <p className="intro intro-last">...and we print it all by hand.</p>
               </div>
            </div>
         </div>
      )
   }
}