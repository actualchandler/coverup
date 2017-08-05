
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
let massiveUri = config.MASSIVE_URI;
let massiveServer = massive.connectSync({
	connectionString: massiveUri
});

app.set('db', massiveServer);
let db = app.get('db')

let dbSetup = require('./services/dbSetup')
dbSetup.run()


// SESSION AND PASSPORT //
let passport = require('./services/passport')
app.use(passport.initialize())
app.use(passport.session())

// PASSPORT ENDPOINTS //
app.get('/auth', function (req, res, next) {
	// Is a different state required for callback?
	if (req.query.state)
		req.session.state = req.query.state

  passport.authenticate('auth0')(req, res, next)
})
app.get('/auth/callback', function(req, res, next) {
	// Check where the user should be redirected
	let state = 'profile'
	if (req.session.state)
		state = req.session.state

	req.session.state = null

	passport.authenticate('auth0', {
	  successRedirect: '/#!/' + state,
	  failureRedirect: '/#!/'
	})(req, res, next)
})

app.get('/api/logout', function(req, res, next) {
	req.logout()
	return res.status(200)
		.send('logged out')
})

// POLICIES //
let isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send()
	return next()
}

// CONTROLLERS //
let userCtrl = require('./controllers/userCtrl')
let orderCtrl = require('./controllers/shop/orderCtrl')
let productCtrl = require('./controllers/shop/productsCtrl')

// USER ENDPOINTS //
app.get('/api/me', userCtrl.me)
app.put('/api/user/current', isAuthed, userCtrl.update_current)

// ORDER ENDPOINTS //
app.put('/api/order/complete', isAuthed, orderCtrl.complete, orderCtrl.read);
app.get('/api/order/history', isAuthed, orderCtrl.orderHistory);
app.get('/api/order', isAuthed, orderCtrl.read);
app.post('/api/order/add', isAuthed, orderCtrl.addToCart);
app.put('/api/order/update/:id', isAuthed, orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', isAuthed, orderCtrl.deleteFromCart);

// PODUCTS ENDPOINTS //
app.get('/api/products', productCtrl.read);
app.get('/api/product/:id', productCtrl.read_id);




// *** CONNECTION ***
let port = config.PORT

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})