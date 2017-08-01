
import React, { Component } from 'react'

import './about.css'

export default class AboutUs extends Component {
   render(){
      return (
         <div>
               <p className="header-h1">About Us</p>
            <div className="row">
               <div className="col-md-offset-1 col-md-6">
                  <p className="title">We are a family owned business and pride ourselves in quality services.</p>
                  <p className="content">Cover Up was established as a store front in 1995. It originally began as an upholstery business in the basement of a small home owned by the Smith family. From there it branched out to other small orders of t-shirts with transfers on them, and homemade reversible soccer jerseys with numbers applied by a heat press. Eventually an opportunity for a store front came on Main Street in Tremonton.</p>
               </div>
               <div className="col-md-4">
                  <img className="four-head" src={ require('../../img/4head.jpg') } alt="4 Head"/>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-1 col-md-6">
                  <p className="content">The upholstery side was dropped a few years after the business opened and Cover Up branched into the embroidery and screen printing business. It started with one small single head embroidery machine and all of the screen printing was sub-contracted out.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-1 col-md-6">
                  <p className="content">As time went on the business was able to invest into a 4 head embroidery machine and eventually screen printing equipment. In 2004, the business expanded and opened a second location in Brigham City.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-1 col-md-6">
                  <p className="content">It started in Brigham with a single head embroidery machine and all the screen printing was done at the location in Tremonton. The Brigham shop was able to buy another 4 head embroidery machine and another single head embroidery machine after being in business in Brigham for 4 years.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-md-offset-1 col-md-6">
                  <p className="content content-last">This location is run and managed by Ryan Smith, and they currently have three employees: Ben Sharp, Byron Sorensen, and Cherish Sorensen. Being a small business has many set-backs as well as many advantages. Throughout the challenges, however, Cover Up has managed to continue its growth in both customer base and quality services.</p>
               </div>
            </div>
         </div>
      )
   }
}