import React, { Component } from 'react'
import Footer from '../footer/Footer'

import './shop.css'

export default class Shop extends Component {
   constructor(props){
      super(props)

      this.state = {
         kihomacCode: ''
         , accessCode: 'code'
      }
   }

   goTo(route) {
    this.props.history.replace(`/${route}`)
  }

   onInputChange(code) {
      this.setState({ kihomacCode: code })
   }

   onCodeSubmit(){
      let code = this.state.kihomacCode
      let accessCode = this.state.accessCode

      if(code === accessCode){
            this.goTo('kihomac')
      } else {
            alert('Invalid Access Code')
      }
   }


   render(){
      return (
         <div>
            
            <div className="row">
               <div className="col-md-offset-2 col-md-4">
                  <div className="row">
                     <div className="col-md-12">
                        <img 
                              className="shop-img" 
                              src={ require('../../img/shop/behsfootball/box-elder-logo.jpg') } 
                              alt="Box Elder High School"
                              onClick={event => this.goTo('behsfootball')}/>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                        <h1 className="shop-name">BEHS Football</h1>
                        <h4>Close Date: June 16th 2017</h4>
                     </div>
                  </div>
               </div>

               <div className="col-md-4">
                  <div className="row">
                     <div className="col-md-12">
                        <img className="shop-img" src={ require('../../img/shop/KIHOMAC.png') } alt="Kihomac"/>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                        <h1 className="shop-name">Kihomac</h1>
                       <h4>Access Code: 
                          <input value={this.state.code} 
                           onChange={event => this.onInputChange(event.target.value)} /><button onClick={ event => this.onCodeSubmit() }>GO</button></h4>
                     </div>
                  </div>
               </div>   
            </div>
         <Footer />
         </div>
      )
   }
}