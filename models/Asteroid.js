const mongoose = require('mongoose')
const db = require('../db')
const Schema = mongoose.Schema

const AsteroidSchema = new Schema({
  date: Date,
  reference: String,
  name: String,
  speed: Number,
  is_hazardous: Boolean
})

const Asteroid = mongoose.model('Asteroid', AsteroidSchema, 'asteroids')
module.exports = Asteroid
