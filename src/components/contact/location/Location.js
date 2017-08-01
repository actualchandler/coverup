import React, { Component } from 'react'

import Ionicon from 'react-ionicons'
import './location.css'

export default class Locations extends Component {
render() {
      return (
               <div className="row locations">
                  <div className="col-md-offset-2 col-md-3">
                     <h3 className="center-blue">Brigham City</h3>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-ios-location" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>47 South Main <br />
                                 Brigham City, UT 84302</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-android-call" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>(435) 723-2266</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-email" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>coverupbc@yahoo.com</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-2">
                     <h4 className="center-blue hours">Store Hours</h4>
                     <p className="hours-time">Mon - Fri<br />
                     10am - 6pm</p>
                  </div>
                  <div className="col-md-3">
                     <h3 className="center-blue">Temonton City</h3>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-ios-location" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>115 West Main<br />
                                 Tremonton, UT 84337</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-android-call" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>(435) 257-7600 </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-offset-1 col-md-2">
                           <Ionicon icon="ion-email" fontSize="30px" color="blue" className="icon"/>
                        </div>
                        <div className="col-md-8">
                           <p>coverup@frontiernet.net</p>
                        </div>
                     </div>
                  </div>
               </div>
      )
   }
}
      