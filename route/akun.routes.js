const express = require('express')
const route = express.Router()
const { getBankAccounts, accountpost } = require('../controller/user.controller')
const { CheckPostAccount } = require('../middleware/middleware')

route.get('/', getBankAccounts)
route.post('/', CheckPostAccount, accountpost)

module.exports = route