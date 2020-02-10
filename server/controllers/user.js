"use strict"

const { User } = require("../models")
const jwt = require("jsonwebtoken")

class userController {
    static register(req, res) {
        console.log(req.body)
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(result => {
            // console.log(result)
            const token = jwt.sign({id: result.id}, process.env.JWT_KEY) 
            res.status(200).json({access_token: token})
        })
        .catch(err => {
            res.status(500).json({message: "internal server error"})
        })
    }

    static login(req, res){
        console.log(req.body)
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function (result) {
            // console.log(result)
            if(!result || result.password !== req.body.password) {
                res.status(404).json({message: "email/password wrong"})
            } else {
                const token = jwt.sign({id: result.id}, process.env.JWT_KEY) 
                res.status(200).json({access_token: token})
            }
        })
        .catch(err => {
            res.status(500).json({message: "internal server error"})
            cosole.log(err)
        })
    }
}

module.exports = userController