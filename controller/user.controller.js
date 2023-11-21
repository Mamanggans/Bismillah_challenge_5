// const { Client } = require("pg");

// const {Prisma, PrismaClient} = require('@prisma/Client')
const {ResponseTemplate} = require('../helper/template.helper')
const {PrismaClient} = require('@prisma/client')
const {HashPassword} = require('../helper/hash.pass')
const prisma = new PrismaClient(); 

// function User(req, res){
//     let resp = ResponseTemplate(null, success, null, 200)
//     res.json(resp)
// }

async function UserPost(req, res){
    // const {name, email, password} = req.body
    const { name, email, password, identity_type, identity_number, address } = req.body;
    const hashPass = await HashPassword(password)

  try {
    const newUser = await prisma.User.create({
      data: {
        name,
        email,
        password : hashPass,
      //   Profile: {
      //     create: profile
      //   }
      // },
      // include: {
      //   Profile: true
      // }
        Profile: {
          create: {
            identity_type,
            identity_number,
            address,
          },
        },
      },
    });
    let resp = ResponseTemplate(newUser, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}
async function GetAllAccount(req, res) {
  // try {
  //   const users = await prisma.user.findMany({
  //     include: {
  //       Profile: true
  //     }
  const { name, email, password, 
    // identity_type, identity_number, address
  } = req.body;
  const payload = {}

  if (name) {
      payload.name = name
  } 
  if (email) {
    payload.email = email
  }
  if (password) {
    payload.password = password
  }
  // if (identity_type) {
  //   payload.identity_type = identity_type
  // }
  // if (identity_number) {
  //   payload.identity_number = identity_number
  // }
  // if (address) {
  //   payload.address = address
  // }
  // const newUser = await prisma.profile.create({
    try {
      // const currentPage = parseInt(page) || 1
      // const itemsPerPage = parseInt(perPage) || 10

      // const totalRecords = await prisma.users.count();
      const user = await prisma.User.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
        },
        where: payload,
        });
        let resp = ResponseTemplate(user, "success", null, 200);
        res.json(resp);
        return;
      } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500);
        res.json(resp);
        return;
      }
    }



module.exports = { 
    UserPost,
    GetAllAccount
}