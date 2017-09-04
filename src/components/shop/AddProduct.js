import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createProduct } from '../../actions/product_actions'

class AddProduct extends Component {
   renderField(field){
      return (
         <div>
            <label>{ field.label } </label>
            <input
            type="text"
            {...field.input}
            />
            { field.meta.touched ? field.meta.error : '' }
         </div>
      )
   }

   onSubmit(values){
      this.props.createProduct(values, () => {
         this.props.history.push('/addproduct')
      })
   }

   render() {

      const { handleSubmit } = this.props
      return (
         <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
               label='product_id'
               name='product_id'
               component={this.renderField}
               />
               <Field
               label='description'
               name='description'
               component={this.renderField}
               />
               <Field
               label='fabric'
               name='fabric'
               component={this.renderField}
               />
               <Field
               label='price'
               name='price'
               component={this.renderField}
               />
               <Field
               label='sizes'
               name='sizes'
               component={this.renderField}
               />
               <Field
               label='colors'
               name='colors'
               component={this.renderField}
               />
               <Field
               label='image_url'
               name='image_url'
               component={this.renderField}
               />
               <Field
               label='shop'
               name='shop'
               component={this.renderField}
               />
               <button className="btn">Submit</button>
               </form>
         </div>
      )
   }
}

export default reduxForm({form: 'ProductsNewForm'})(connect(null, { createProduct })(AddProduct))