import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash'

import './shop.css'

// *** actions ***
import { fetchProduct } from '../../actions/index'
   class ProductsIndex extends Component {
     constructor(props){
       super(props)
       this.state = {
        color: ''
        , size: ''
       }

      this.handleColorChange = this.handleColorChange.bind(this)
      this.handleSizeChange = this.handleSizeChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
     }

   componentDidMount() {
      this.props.fetchProduct(this.props.match.params.id)
   }

     goTo(route) {
            this.props.history.replace(`/${route}`)
      }

    onSubmit(values){
       console.log(values)
      }
        
    handleColorChange(event) {
      console.log(event.target.value)
      this.setState({color: event.target.value})
    }

    handleSizeChange(event) {
      console.log(event.target.value)
      this.setState({color: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(`${this.state.color} ${this.state.size}`)
    }

      colorOptions(colors){
         return colors.map(color => {
            return (
               <option value={color} key={color}>{color}</option>
            )
         })
      }

      sizeOptions(size){
         return size.map(size => {
            return (
               <option value={size} key={size}>{size}</option>
            )
         })
      }

   renderProduct() {
      // If there is no product, return: 'Loading...'
      if(!this.props.description) {
         return (
            <div>
               Loading...
            </div>
         )
      } else {
         let colors = this.props.colors.split(', ')
         let sizes = this.props.sizes.split(', ')
         let price = 0

         function setPrice(){
           if(this.state.size === ''){
             price = parseInt(this.props.price, 10)
             return price
           } else if (this.state.size === 'XXL'){
            price += 2
            return price
           } else if(this.state.size === 'XXXL'){
             price += 3
             return price
           } else if(this.state.size === 'XXXXL'){
             price += 4
             return price
           }
         }

         return (
            <div>

            <div className='row'>
                  <div className="col-md-offset-3 col-md-4">
                     <img className="product-img" src={require(`../../img/shop/${this.props.shop}/${this.props.image_url}`)} alt={this.props.description} />   
                   </div>
                   {/* Constant product info */}
                   <div className="col-md-3">
                     { this.props.description  }<br />
                     { this.props.fabric }<br />
                     ${ price }<br />
                     { this.props.product_id }

                     {/* form */}
                     <div className="row">
                        <form onSubmit={this.handleSubmit}>
                           <select value={this.state.value} onChange={this.handleColorChange}>
                              { this.colorOptions(colors) }
                           </select>
                           <select value={this.state.value} onChange={this.handleSizeChange}>
                              { this.sizeOptions(sizes) }
                           </select>
                           <button type="submit" value="submit">Add to Cart</button>
                        </form>
                     </div>
                  </div>
               </div>

            </div>
         )
      }
   }

   render() {
      return (
         <div>
              { this.renderProduct() }  
         </div>
      )
   }
}

function mapStateToProps(state){
   return { 
      description: state.products.description
      , fabric: state.products.fabric
      , price: state.products.price
      , colors: state.products.colors
      , shop: state.products.shop
      , image_url: state.products.image_url
      , sizes: state.products.sizes
   }
}

export default connect(mapStateToProps, { fetchProduct })(ProductsIndex)