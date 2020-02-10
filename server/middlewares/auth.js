"use_strict"

const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    console.log(req.headers["access_token"])
    const tokenVerify = jwt.verify(req.headers["access_token"], process.env.JWT_KEY)
    console.log(tokenVerify)
        if(!tokenVerify){
            throw ({code: 403, message: "forbidden"})
        } else {
            next()
        }
    next()
}