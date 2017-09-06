const router = require('express').Router()
const Asteroid = require('../../models/Asteroid')

// TODO move the queries to the model / make a class

router.get('/hazardous', (req, res) => {
  Asteroid.find({
    isHazardous: true
  }, (err, results) => {
    if (err) {
      res.send(500, err)
    } else {
      res.send(results)
    }
  })
})

router.get('/fastest', (req, res) => {
  const isHazardous = req.query.hazardous === 'true' || req.query.hazardous === true
  Asteroid.findOne({
    isHazardous: isHazardous
  }, ['speed'], {
    sort: {
      speed: -1 // Sort by speed DESC
    }
  }, (err, results) => {
    if (err) {
      res.send(500, err)
    } else {
      res.send(results)
    }
  })
})

router.get('/best-year', (req, res) => {
  const isHazardous = req.query.hazardous === 'true' || req.query.hazardous === true
  Asteroid.aggregate([
    {
      $match: {
        isHazardous: isHazardous
      }
    },
    {
      $group: {
        _id: { year: { $year: '$date' } },
        count: { $sum: 1 }
      }
    }

  ]).exec((err, results) => {
    if (err) {
      res.send(500, err)
    } else {
      res.send(results)
    }
  })
})

router.get('/best-month', (req, res) => {
  const isHazardous = req.query.hazardous === 'true' || req.query.hazardous === true
  Asteroid.aggregate([
    {
      $match: {
        isHazardous: isHazardous
      }
    },
    {
      $group: {
        _id: { month: { $month: '$date' } },
        count: { $sum: 1 }
      }
    }

  ]).exec((err, results) => {
    if (err) {
      res.send(500, err)
    } else {
      res.send(results)
    }
  })
})

module.exports = router
