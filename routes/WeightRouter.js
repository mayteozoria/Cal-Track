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
router.put(
  '/:weight_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateWeight
)
router.delete(
  '/:weight_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteWeight
)

module.exports = router
