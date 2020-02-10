"use strict"

const express = require("express")
const route = express.Router()
const comicController = require("../controllers/comic")
const auth = require("../middlewares/auth")

route.get("/", auth, comicController.getAll)
route.put("/:id", auth,comicController.update)

module.exports = route