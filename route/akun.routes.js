const express = require('express')
const route = express.Router()
const { getBankAccounts } = require('../controller/user.controller')
const { CheckPostAccount } = require('../middleware/middleware')

route.get('/', getBankAccounts)


module.exports = route