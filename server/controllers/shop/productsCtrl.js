// REQUIRE DEPENDENCIES
// ============================================================
let app = require('../../server.js')
let db = app.get('db')

module.exports = {

  // CRUD METHODS
  // ============================================================
  read_shop: (req, res, next) => {
    db.product.read_shop([req.params.shop], (err, product) => {
      if (err) {
        console.log('products_read_shop: ', err)
        return res.status(500).send(err)
      }
      
      return res.status(200).send(product)
    })
  },

  read_id: function(req, res, next) {
    db.product.read_id([req.params.id], function(err, product) {
      if (err) {
        console.log('product_read: ', err)
        return res.status(500).send(err)
      }

      // console.log('Getting product with ID:', req.params.id)
      return res.status(200).send(product[0])
    })
  },

  create: (req, res, next) => {
    let product = req.body
    db.product.create_product([product.product_id, product.description, product.price, product.fabric, product.sizes, product.colors, product.image_url, product.shop], (err, pr) => {
      if (err) {
        console.log(`Create Product Error: ${err}`)
        return res.status(500).send(err)
      } else {
        return res.status(200).send(product)
      }
    })
  }


}
