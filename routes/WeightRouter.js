const router = require('express').Router()
const controller = require('../controllers/WeightController')
const middleware = require('../middleware')

router.get('/', controller.GetWeight)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWeight
)

module.exports = router
