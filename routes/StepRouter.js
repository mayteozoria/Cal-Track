const router = require('express').Router()
const controller = require('../controllers/StepController')
const middleware = require('../middleware')

router.get('/', controller.GetSteps)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateStep
)

module.exports = router
