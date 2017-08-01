import React, { Component } from 'react'

import Ionicon from 'react-ionicons'
import './footer.css'

export default class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            <div className="row">
                  <Ionicon icon="ion-social-facebook" fontSize="30px" color="white"/>
                  <br />
                  <Ionicon icon="ion-social-instagram" fontSize="30px" color="white"/>
            </div>
            <div className="row">
               <p>&copy; 2017 Cover Up. &nbsp; All Rights Reserved</p>
            </div>
         </footer>
      )
   }
}

