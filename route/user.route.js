const express = require('express')
const route = express.Router()
const { GetAllAccount, UserPost } = require('../controller/user.controller')
const { CheckPost } = require('../middleware/middleware')


route.get('/', GetAllAccount)
route.post('/', CheckPost, UserPost)

module.exports = route