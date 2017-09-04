import React, { Component } from 'react'
import {  Button } from 'react-bootstrap'

export default class Manager extends Component {

  goTo(route){
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }
   
   render() {
      return (
         <div className="container">
                 <div className="profile-area">
                   <Button
                       bsStyle="primary"
                       className="btn-margin"
                       onClick={this.logout.bind(this)}
                     >
                       Log Out
                     </Button>
                     <Button
                         bsStyle="default"
                         className="btn-margin"
                         onClick={this.goTo.bind(this, 'addproduct')}
                       >
                         Add Product
                       </Button>
                 </div>
               </div>
      )
   }
}