
const { ResponseTemplate } = require('../helper/template.helper')
const Joi = require('joi');
// function PrintSuccess(req, res, next) {
//     const { } = req.params.id
//     console.log(`nyoba akses`)
//     next()
// }

// function PrintSuccessRoute(req, res, next) {

//     console.log(` berhasil lewat reoute `)
//     next()
// }

function CheckPost(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().required(),
        identity_type: Joi.string().required(),
        identity_number: Joi.string().required(),
        address: Joi.string().required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        let respErr = ResponseTemplate(null, 'invalid request',
            error.details[0].message, 400)
        res.json(respErr)
        return
    }

    next()
}





module.exports = {
    CheckPost
}