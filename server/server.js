
// EXTERNAL MODULES
const express = require('express')
, session = require('express-session')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')

// CONFIG
let config = require('./config')

// EXPRESS
let app = module.exports = express()

app.use(bodyParser.json())
app.use(cors())

app.use(session({
   secret: config.SESSION_SECRET
   , saveUninitialized: false
   , resave: false
}))

// MASSIVE AND DB SETUP
let massiveUri = config.MASSIVE_URI
let massiveServer = massive.connectSync({
	connectionString: massiveUri
})

app.set('db', massiveServer)
let db = app.get('db')

let dbSetup = require('./services/dbSetup')
dbSetup.run()


// SESSION AND PASSPORT //
let passport = require('./services/passport')
app.use(passport.initialize())
app.use(passport.session())

// CONTROLLERS //
// let userCtrl = require('./controllers/userCtrl')
let orderCtrl = require('./controllers/shop/orderCtrl')
let productCtrl = require('./controllers/shop/productsCtrl')

// USER ENDPOINTS //
// app.get('/api/users/me/:user', userCtrl.read)

// ORDER ENDPOINTS //
app.post('/api/order/create', orderCtrl.createOrder)
app.put('/api/order/complete/:userID', orderCtrl.completeOrder)
app.get('/api/order/cart/:userID', orderCtrl.getCart)
app.get('/api/order/history/:userID', orderCtrl.getOrders)


// PRODUCTS ENDPOINTS //
app.get('/api/products/:shop', productCtrl.read_shop)
app.get('/api/product/:id', productCtrl.read_id)
app.post('/api/product/new', productCtrl.create)




// *** CONNECTION ***
let port = config.PORT

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})