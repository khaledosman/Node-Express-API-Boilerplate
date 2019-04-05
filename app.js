require('dotenv').config()
// external libraries
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const updateDB = require('./helpers/update-db')

// app dependencies
const app = express()

// setup middlewars
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('common'))
app.use(bodyParser.json())

// routes
app.use(require('./controllers'))

// fetch data
updateDB()

// start the server
app.listen(process.env.PORT_NUMBER, () => {
  console.log('listening to connections on port: ' + process.env.PORT_NUMBER)
})
