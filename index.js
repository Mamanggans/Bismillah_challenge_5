const router = require('./route/routes')
const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
