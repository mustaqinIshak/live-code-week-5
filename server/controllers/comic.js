"use strict"

const { Comic } = require("../models")
const jwt = require("jsonwebtoken")

class comicController {
    static getAll(req, res) {
    //    console.log(req.body)
        Comic.findAll()
        .then(result => {
            res.code(200).json({result})
        })
        .catch(err => {
            // res.code(500).json({message: "internal server error"})
        })
    }

    static update(req, res){
        console.log(req.body)
    }
}

module.exports = comicController