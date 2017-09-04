let app = require('../../server.js')
let db = app.get('db')

module.exports = {
   complete: (req, res, next) => {
      console.log("Completing Order")

      // Updates orders table where the completed_date column is undefined and sets it as defined with correct user_id
      // Updates fulfilled column as undefined with correct user_id
      db.order.update([req.params.id, new Date(), undefined], (err, order) => {
          if (err) {
        console.log('Complete order ERR: ', err);
        return res.status(500).send(err);
      }
      })
   },

   read: (req, res, next) => {
      db.user.read_email([req.params.email], (err, user) => {
        user = user[0]

        if(err){
          console.log('Read user ERR:', err)
          return res.status(500).send(err)
        }

        // No user, create one
        else if(!user){
          db.user.insert([req.params.email], (err, user) => {
            if(err){
              console.log('Create user ERR:', err)
              return res.status(500).send(err)
            }

            user = user[0]
            // There was no user, created one, now create an order for them
            db.order.insert([user.user_id], (err, order) => {
              if(err){
                console.log('Created new user, create new order ERR:', err)
                return res.status(500).send(err)
              }

              db.order.read_incomplete([user.user_id], (err, order) => {
                if(err){
                  console.log('Create new user, create order read ERR:', err)
                  return res.status(500).send(err)
                }

                return res.status(200).send('New Order Created')
              })
            })
          })
        }

        // Was user, now get order
        db.order.read_incomplete([user.user_id], (err, order) => {
          if(err){
            console.log('Read order ERR:', err)
            return res.status(500).send(err)
          }

          // There was no order so start a new one
          else if(!order[0]){
            db.order.insert([user.user_id], (err, order) => {

              if(err){
                console.log('Created new user, create new order ERR:', err)
                return res.status(500).send(err)
              }
            })
            return res.status(200).send('Order Created')
          }
          
            order = order[0]

                db.order.read_id([order.order_id], (err, order) => {
                  if (err) {
                     console.log('Order read ERR:', err)
                     return res.status(500).send(err)
                  }

                  db.order.get_products([order[0].order_id], (err, products) =>{
                     if (err) {
                        console.log('Order products read ERR:', err)
                        return res.status(500).send(err)
                  }
   
                  return res.status(200).send(products)
                  })
               })
        })
      })
    },

   addToCart: (req, res, next) => {
     //Find the user
      db.user.read_email([req.body.email], (err, user) => {
        user = user[0]

        if (err) {
          console.log('Add to cart user read ERR:', err)
          return res.status(500).send(err)
        }

        // Find the order with the right user
        db.order.read_incomplete([user.user_id], (err, order) => {
          
          if (err) {
            console.log('Add to cart read order ERR:', err)
            return res.status(500).send(err)
          }

          //Above query call will return an array of objects with just one object, select the first one and set it to order
          order = order[0]
          
          //Check if the product has already been added to order CAUSE if it did it needs to be updated
          db.order.read_product([req.body.product_id, order.order_id, req.body.color, req.body.size], (err, product) => {
             if (err) {
                console.log('Add to cart ERR:', err)
                return res.status(500).send(err)
             }
    
             // Checks if product has previously been added to cart. If it has it updates the QTY, if it hasn't simply adds to order 
             if(product.length) {
               //Change the string to a number
                db.product.update_order([product[0].pio_id, ((product[0].qty * 1) + (req.body.qty * 1))], (err, product) => {

                   if (err) {
                      console.log('Update qty ERR', err)
                      return res.status(500).send(err)
                   }
    
                   return res.status(200).send('Product updated successfully') 
                })
             } else {
               // All other tests fail so it just adds the new product ot the order
                db.product.add_to_cart([order.order_id, req.body.product_id, req.body.color, req.body.size, req.body.qty], (err, product) => {

                   if (err) {
                      console.log('Add to order ERR:', err)
                      return res.status(500).send(err)
                   }

                   return res.status(200).send('Product Added to Cart')
                })
             }
          })
        })
      })
   },

   updateItemInCart: (req, res, next) => {
      db.product.update_order(['req.params.id', 'req.body.qty'], (err, product) => {
         if (err) {
            console.log('Update order ERR:', err)
            return res.status(200).send(err)
         }
         return res.status(200).send('Product updated successfully')
      })
   },

   deleteFromCart: (req, res, next) => {
      db.product.remove_from_cart([req.params.id], (err, response) => {
         if (err) {
            console.log('Delete product in cart ERR:', err)
            return res.status(500).send(err)
         }
         return res.status(200).send('Product deleted successfully')
      })
   },

   orderHistory: (req, res, next) => {
     db.user.read_email([req.params.email], (err, user) => {

       if (err) {
         console.log('Order history read user ERR:', err)
         return res.status(500).send(err)
       }
      user = user[0]

       db.order.read_user_id([user.user_id], (err, orders) => {
         if (err) {
           console.log('Order products read ERR', err)
           return res.status(500).send(err)
          }
          
          let order_ids = orders.map((order) => order.order_id)
          
          db.order.get_products_multiple([order_ids], (err, products) => {
            if (err) {
              console.log('Order products read ERR:', err)
              return res.status(500).send(err)
            }
            
            orders.forEach((order) => order.product = products.filter((product) => product.order_id === order.order_id))
            
            return res.status(200).send(orders)
          })
        })
      })
      }
      
      
    }
    