const { Food } = require('../models')

const GetFoods = async (req, res) => {
  try {
    const foods = await Food.find({})
    res.send(foods)
  } catch (error) {
    throw error
  }
}

const CreateFood = async (req, res) => {
  try {
    const food = await Food.create({ ...req.body })
    res.send(food)
  } catch (error) {
    throw error
  }
}

const UpdateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.food_id, req.body, {
      new: true
    })
    res.send(food)
  } catch (error) {
    throw error
  }
}

const DeleteFood = async (req, res) => {
  try {
    await Food.deleteOne({ _id: req.params.food_id })
    res.send({ msg: 'Food Deleted', status: 'OK' })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetFoods,
  CreateFood,
  UpdateFood,
  DeleteFood
}
