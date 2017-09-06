const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    hello: 'world!'
  })
})

router.use('/neo', require('./neo'))

module.exports = router
