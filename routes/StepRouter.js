const router = require('express').Router()
const controller = require('../controllers/StepController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSteps
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateStep
)
router.put(
  '/:step_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateStep
)
router.delete(
  '/:step_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteStep
)
module.exports = router
