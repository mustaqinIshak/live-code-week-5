"use strict"

const express = require("express")
const route = express.Router()
const userController = require("../controllers/user")

route.post("/login", userController.login)
route.post("/register", userController.register)

module.exports = route