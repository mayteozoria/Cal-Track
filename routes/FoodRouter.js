const router = require('express').Router()
const controller = require('../controllers/FoodController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetFoods
)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateFood
)
router.put(
  '/:food_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateFood
)
router.delete(
  '/:food_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteFood
)

module.exports = router
