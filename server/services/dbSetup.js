// APP AND CONFIG REQUIRE //
let app = require('../server.js')
let config = require('./../config')
let db = app.get('db')

// ALLOW CONSOLE OUTPUT //
let allowConsoleOutput = config.INITIALIZE_LOG
let log = function(input) {
	if (allowConsoleOutput) {
		console.log(input)
	}
}

// INITIALIZE FUNCTION //
module.exports = {
	run: function() {
		log('Initializing database')

		db.initialize.tables_initialize(function(err, table) {
			if (err) log('Some tables failed to create')
			else log('Tables successfully initialized')
		})
	}
}
