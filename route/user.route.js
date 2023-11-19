const express = require('express')
const route = express.Router()
const { UserPost } = require('../controller/user.controller')
const { CheckPost } = require('../middleware/middleware')


// route.get('/', User)
route.post('/', CheckPost, UserPost)

module.exports = route