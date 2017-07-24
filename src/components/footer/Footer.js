import React, { Component } from 'react'

import './footer.css'

export default class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            <ul>
               <li>Facebook</li>
               <li>Instagram</li>
            </ul>
            <p>&copy; 2017 Cover Up. All Rights Reserved</p>
         </footer>
      )
   }
}

