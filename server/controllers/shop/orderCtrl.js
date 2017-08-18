let app = require('../../server.js')
let db = app.get('db')

module.exports = {
   createOrder: (req, res, next) => {
      let product = req.body
      db.order.create_order([product.userID, product.product_id, product.color, product.size, product.qty, product.price], (err, order) => {
         if (err) {
            console.log('Create order ERR', err)
            return res.status(500).send(err)
         }
         console.log('Added to Cart')
         return res.status(200).send(order)
      })
   },

   completeOrder: (req, res, next) => {
      db.order.complete_order([req.params.userID, new Date()], (err, order) => {
         if (err) {
            console.log('Complete order ERR', err)
            return res.status(500).send(err)
         }
         console.log('Order completed')
         return res.status(200).send(order)
      })
   },

   getCart: (req, res, next) => {
      db.order.get_cart([req.params.userID], (err, cart) => {
         if (err) {
            console.log('Get cart ERR', err)
            return res.status(500).send(err)
         }
         return res.status(200).send(cart)
      })
   },

   getOrders: (req, res, next) => {
      db.order.get_history([req.params.userID], (err, history) => {
         if (err) {
            console.log('Get order history ERR', err)
            return res.status(500).send(err)
         }
         return res.status(200).send(history)
      })
   }
   
}
