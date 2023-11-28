const express = require('express')
const route = express.Router()
const { GetAllAccount, UserPost, retrieveUserbyId} = require('../controller/user.controller')
const { CheckPost } = require('../middleware/middleware')


route.get('/', GetAllAccount)
route.post('/', CheckPost, UserPost)
route.get('/:user_id', retrieveUserbyId)
// route.put('/:id', UpdateUser)


module.exports = route