const router = require('express').Router()
const controller = require('../controllers/FoodController')
const middleware = require('../middleware')

router.get('/', controller.GetFoods)
router.post(
  '/',
  middleware.stripToken,
  middle.verifyToken,
  controller.CreateFood
)
router.put(
  '/:food_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateFood
)
router.delete(
  '/:food_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteFood
)
