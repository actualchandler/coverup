// APP //
let app = require('../server.js')
let db = app.get('db')

module.exports = {
   // read: (req, res, next) => {
   //    let user = req.params.user
   //    db.user.read_id([user.sub], (err, user) => {
   //       if (err) {
   //          console.log(`Read User Error: ${err}`)
   //          return res.status(500).send(err)
   //       } else if (!user.length){
   //          db.user.create_user([user.given_name, user.family_name, user.sub], (err, user) => {
   //             if (err) {
   //                console.log('Create user error', err)
   //                return res.status(500).send(err)
   //             } else {
   //                console.log('User created')
   //                return res.status(200).send(user)
   //             }
   //          })
   //       } else {
   //          return res.status(200).send(user)
   //       }
   //    })
   // }

}