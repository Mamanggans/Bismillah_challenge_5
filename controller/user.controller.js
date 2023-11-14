// const { Client } = require("pg");

// const {Prisma, PrismaClient} = require('@prisma/Client')
const {ResponseTemplate} = require('../helper/template.helper')
const {PrismaClient} = require('@prisma/client') 

function User(req, res){
    let resp = ResponseTemplate(null, success, null, 200)
    res.json(resp)
}

async function UserPost(req, res){
    const {name, email, password} = req.body
    const payload = {
        name, email, password
    }
    try{
        const user = await Prisma.User.create({
            data: payload
        })
        let resp = ResponseTemplate(user, 'success', null, 200)
        res.json(resp)
        return
    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        resp.json(resp)
        return
    }
}

module.exports = {
    User, 
    UserPost
}