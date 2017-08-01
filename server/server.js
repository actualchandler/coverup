
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

app.set('db', masiveServer)
let db = app.get('db')

// CONTROLLERS

// ENDPOINTS

// CONNECTION
let port = config.PORT

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})