import React, { Component } from 'react'

import './vid.css'

export default class Vid extends Component{
   render() {
      return (
         <div className="vid">
            <div className="row">
               <div className="col-md-offset-2 col-md-8">
                  <h1 className="intro">We print quality products with the highest standards...</h1>
                  <br />
                  <h1 className="intro">and we print it all by hand.</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-3 col-md-6">
                  <iframe className="vid-border" width="100%" height="350" frameborder="0" seamless="seamless" src="https://www.youtube.com/embed/M1FBGHxHwsI" frameborder="0" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      )
   }
}