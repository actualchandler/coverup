import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import './shop.css'

// *** actions ***
import { fetchProduct } from '../../actions/index'
import { addToCart } from '../../actions/index'

  class ProductsIndex extends Component {
     constructor(props){
       super(props)
       this.state = {
         color: ''
         , size: ''
         , qty: ''
         , profile: {}
      }
      this.handleColorChange = this.handleColorChange.bind(this)
      this.handleSizeChange = this.handleSizeChange.bind(this)
      this.handleQtyChange = this.handleQtyChange.bind(this)
     }


   componentWillMount() {
      this.props.fetchProduct(this.props.match.params.id)
      this.setState({ profile: {} })

      const { userProfile, getProfile } = this.props.auth
        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile })
          })
        } else {
          this.setState({ 
            profile: userProfile 
          })
        }
     }
        
    handleColorChange(event) {
      this.setState({color: event.target.value})
    }

    handleSizeChange(event) {
      this.setState({size: event.target.value})
    }

    handleQtyChange(event) {
      this.setState({qty: event.target.value})
    }

    onSubmit(values) {
      const { isAuthenticated } = this.props.auth

      if(!isAuthenticated()){
          alert("Please Log In")
      } else if (this.state.color === ''){
        alert('Please Choose a Color')
      } else if (this.state.size === ''){
        alert('Please Choose a Size')
      } else if (this.state.qty === ''){
        alert('Please Select Quantity')
      } else {
        let values = {
          color: this.state.color
          , size: this.state.size
          , qty: this.state.qty
          , userID: this.state.profile.sub
          , product_id: this.props.product_id
          , price: this.props.price
        }
        this.props.addToCart(values, () => {
          alert('Product Added to Cart')
      })
      }
    }

      colorOptions(colors){
         return colors.map(color => {
            return (
               <option value={color} key={color}>{color}</option>
            )
         })
      }

      sizeOptions(sizes){
         return sizes.map(size => {
            return (
               <option value={size} key={size}>{size}</option>
            )
         })
      }

   renderProduct() {
     const { handleSubmit } = this.props

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
                     ${ this.props.price }<br />
                     { this.props.product_id }

                     {/* form */}
                     <div className="row">
                         <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
                           <select value={this.state.value} onChange={this.handleColorChange}>
                              <option value='' >Color</option>
                              { this.colorOptions(colors) }
                           </select>
                           <select value={this.state.value} onChange={this.handleSizeChange}>
                             <option value='' >Size</option>
                              { this.sizeOptions(sizes) }
                           </select>
                           <input type="number" min='1' value={this.state.value} onChange={this.handleQtyChange} />
                           <button className="btn">Add to Cart</button>
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
      , product_id: state.products.product_id
   }
}

export default reduxForm({form: 'AddToCart' })(connect(mapStateToProps, { fetchProduct, addToCart })(ProductsIndex))