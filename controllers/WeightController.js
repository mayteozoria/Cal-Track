const { Weight } = require('../models')

const GetWeight = async (req, res) => {
  try {
    const weight = await Weight.find({})
    res.send(weight)
  } catch (error) {
    throw error
  }
}

const CreateWeight = async (req, res) => {
  try {
    const weight = await Weight.create({ ...req.body })
    res.send(weight)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetWeight,
  CreateWeight
}
