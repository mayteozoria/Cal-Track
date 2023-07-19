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

const UpdateWeight = async (req, res) => {
  try {
    const weight = await Weight.findByIdAndUpdate(
      req.params.weight_id,
      req.body,
      {
        new: true
      }
    )
    res.send(weight)
  } catch (error) {
    throw error
  }
}

const DeleteWeight = async (req, res) => {
  try {
    await Weight.deleteOne({ _id: req.params.weight_id })
    res.send({ msg: 'Weight deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetWeight,
  CreateWeight,
  UpdateWeight,
  DeleteWeight
}
