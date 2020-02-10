'use strict'
const express = require("express")
const route = express.Router()
const userRoute = require("./user")
const comicRoute = require("./comic")

route.use("/users", userRoute)
route.use("/comics", comicRoute)

module.exports = route