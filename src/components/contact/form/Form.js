import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import { ContactMessage } from '../../../actions/index'

class Contact extends Component {
   renderField(field){
      return (
         <div>
            <label>{ field.label }</label>
            <input
            type='text'
            { ...field.input }
            />
            { field.meta.touched ? field.meta.error : '' }
         </div>
      )
   }

   render() {
      const { handleSubmit } = this.props
      return (
         <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
               label='name'
               name='Name'
               component={ this.renderField }
               />
               <Field
               label='email'
               name='E-mail'
               component={ this.renderField }
               />
               <Field
               label='phone'
               name='phone'
               component={ this.renderField }
               />
               <Field
               label='message'
               name='What Do You Need?'
               component={ this.renderField }
               />
               <button className="btn">Submit</button>
            </form>
         </div>
      )
   }
}

function validate(values) {
   const errors ={}

   if(!values.name) {
      errors.name = "Please enter your name"
   }

   if(!values.phone) {
      errors.phone = "Please enter your number"
   }

   if(!values.email) {
      errors.email = "Please enter your email"
   }

   if(!values.message) {
      errors.message = "Enter your message"
   }

   return errors
}

export default reduxForm({validate, form: 'PostsNewForm'})(connect(null, { createPost })(PostsNew))