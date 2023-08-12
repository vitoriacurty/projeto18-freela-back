import Joi from "joi"

// schema login
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

// schema register
export const registerSchema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().length(11).pattern(/^[0-9]{11}$/).required(),
    phone: Joi.string().length(11).pattern(/^[0-9]{11}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password"))
})

//schema product
export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    photoUrl: Joi.string().uri().required(),
    price: Joi.number().min(1).required()

})
