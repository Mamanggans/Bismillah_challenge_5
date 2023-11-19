// const { Client } = require("pg");

// const {Prisma, PrismaClient} = require('@prisma/Client')
const {ResponseTemplate} = require('../helper/template.helper')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 

// function User(req, res){
//     let resp = ResponseTemplate(null, success, null, 200)
//     res.json(resp)
// }

async function UserPost(req, res){
    // const {name, email, password} = req.body
    const { name, email, password, identity_type, identity_number, address } =
    req.body;

  try {
    const User = await prisma.User.create({
      data: {
        name,
        email,
        password,
        Profile: {
          create: {
            identity_type,
            identity_number,
            address,
          },
        },
      },
    });

    let resp = ResponseTemplate(User, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}


module.exports = { 
    UserPost
}