/* eslint no-template-curly-in-string: "error" */
/* eslint space-infix-ops: "error" */
/* eslint-env es6 */
/* jshint esversion: 6 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: `Server is UP: code 200!`
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your User was registered!`
  })
})

app.listen(process.env.PORT || 8081)
