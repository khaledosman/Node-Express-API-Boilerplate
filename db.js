const mongoose = require('mongoose')

const db = mongoose.connect(`${process.env.MONGO_URI}/my_database`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = db
