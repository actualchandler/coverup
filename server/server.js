
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

app.use(express.static(__dirname + '/../build'))
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
// let passport = require('./services/passport')
// app.use(passport.initialize())
// app.use(passport.session())

// CONTROLLERS //
let userCtrl = require('./controllers/userCtrl')
let orderCtrl = require('./controllers/shop/orderCtrl')
let productCtrl = require('./controllers/shop/productsCtrl')

// USER ENDPOINTS //
app.get('/api/users/me/:email', userCtrl.me)

// ORDER ENDPOINTS //
app.put('/api/order/complete/:id', orderCtrl.complete, orderCtrl.read)
app.get('/api/order/history/:email', orderCtrl.orderHistory)
app.get('/api/order/:email', orderCtrl.read)
app.post('/api/order/add', orderCtrl.addToCart)
app.put('/api/order/update/:id', orderCtrl.updateItemInCart)
app.delete('/api/order/delete/:id', orderCtrl.deleteFromCart)


// PRODUCTS ENDPOINTS //
app.get('/api/products/:shop', productCtrl.read_shop)
app.get('/api/product/:id', productCtrl.read_id)
app.post('/api/product/new', productCtrl.create)


// *** CONNECTION ***
let port = config.PORT

const path = require('path')

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})
