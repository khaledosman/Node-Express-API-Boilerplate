const mongoose = require('mongoose')
const config = require('./config.json')

const db = mongoose.connect(`${config.MONGO_URI}/my_database`)

module.exports = db
