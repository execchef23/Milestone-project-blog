const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/user', (req, res) => {
    console.log('WE SMACKED THE GET ROUTER /Users !!!')
    User.find()
      .then(foundUsers => {
        res.json(foundUsers)    //res.render
      })
      .catch(err => {
        console.log(err)
        res.json('error404')
      })
  })

router.post('/user', (req, res) => {
    console.log("Are you even working bro? New User", req.params.id, req.body)
    User.create(req.body)
      .then((foundUser) => {
        res.json(foundUser)
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
  })
  
module.exports = router;
