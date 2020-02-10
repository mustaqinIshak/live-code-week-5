"use strict"
require('dotenv').config()
const express = require('express')
const app = express()
const routes = require("./routes") 
const port = process.env.PORT
const cors = require('cors')

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get('/', (req, res) => res.send('Hello World!'))
app.use("/", routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
