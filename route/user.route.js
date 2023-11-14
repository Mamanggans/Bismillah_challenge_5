const express = require('express')
const route = express.Router()
const {User, UserPost} = require('../controller/user.controller')
const {checkPostReq} = require('../middleware/middleware')


route.get('/', User)

route.post('/', checkPostReq, UserPost)

module.exports = route