let app = require('./../server');
let db = app.get('db');

module.exports = {
	me: (req, res, next) => {
		console.log('User Controller ME')
		//Find the user and set it to the session
		db.user.read_email([req.params.email], (err, user) => {
			user = user[0]
			
			if (err) {
				console.log('Read email ERR:', err)
				return res.status(500).send(err)
			}
			 else if(!user){
				 // If no user, create one
				 db.user.insert([req.params.email], (err, user) => {
					 if (err) {
						 console.log('Create user ERR:', err)
						 return res.status(500).send(err)
					 }
					// After creating user, start a new order for them 
					 db.order.insert([user.user_id], (err, order) => {
						 if (err) {
							 console.log('Create new order ERR:', err)
						 }

						 user[0].order_id = order[0].id
						 return res.status(200).send(user[0])
					 })
				 })
			 } else {
				 // User found, find their order
				 findOrder(user)
			 }
			 
			 function findOrder(user){
				 db.order.read_incomplete([user.user_id], (err, order) => {
					 if (err) {
						 console.log('Find user order ERR:', err)
						 return res.status(500).send(err)
					 }

					 return res.status(200).send(user)
				 })	
			 }
		})
	}
};
