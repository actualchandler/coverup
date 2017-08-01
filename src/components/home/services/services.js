import React, { Component } from 'react'

import './services.css'

export default class Services extends Component{
   render(){
      return (
         <div className="services">
            <div className="row">
               <p className="header-h1">Services</p>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="service-icon"><img src={ require("../../../img/embicon.png")} alt="Embroidery"/></div>
                  <div className="clearfix"></div>
                  <h3>EMBROIDERY</h3>
                  <ul className="list">
                     <li>Pricing by stitch count</li>
                     <li>No color limit</li>
                     <li>Digitize your logo for only $35 (one time fee)</li>
                     <li>Highest quality standards</li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <div className="service-icon"><img src={ require("../../../img/tshirticon.png")} alt="Embroidery"/></div>
                  <div className="clearfix"></div>
                  <h3>SCREEN PRINTING</h3>
                  <ul className="list">
                     <li>No Minimum</li>
                     <li>Platisol & Discharge Inks</li>
                     <li>No setup fees on orders of 50 or more</li>
                     <li>Best Screen Printer in North America: Byron Sorenson</li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <div className="service-icon"><img src={ require("../../../img/designicon.png")} alt="Embroidery"/></div>
                  <div className="clearfix"></div>
                  <h3>DESIGN</h3>
                  <ul className="list">
                     <li>Artwork $25/hr</li>
                     <li>Get a mockup of your design</li>
                     <li>All artwork kept on file for future orders</li>
                     <li>Cerative help if you're unsure what you're looking for</li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}