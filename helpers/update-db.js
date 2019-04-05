const moment = require('moment')
const request = require('request')
const Asteroid = require('../models/Asteroid')

async function updateDB () {
  const startDate = moment().subtract(3, 'days').format().slice(0, 10)
  const endDate = moment().format().slice(0, 10)
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=true&api_key=${process.env.API_KEY}`
  await request(url, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      throw error
    } else {
      // clear old results
      // Asteroid.collection.drop()
      const nearEarthObjects = JSON.parse(body).near_earth_objects
      // flatten the response extract the data we need
      const asteroids = Object.values(nearEarthObjects)
        .reduce((a, b) => a.concat(b), [])
        .map(item => {
          const closeApproachData = item.close_approach_data[0]
          return {
            date: new Date(closeApproachData.close_approach_date),
            reference: item.neo_reference_id,
            name: item.name,
            speed: closeApproachData.relative_velocity.kilometers_per_hour,
            isHazardous: item.is_potentially_hazardous_asteroid
          }
        })
        // add to db
      Asteroid.collection.insertMany(asteroids, (err, docs) => {
        if (err) {
          console.error(err)
        } else {
          console.log('saved successfully', docs.insertedCount)
        }
      })
    }
  })
}

module.exports = updateDB
