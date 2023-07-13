const { Step } = require('../models')

const GetSteps = async (req, res) => {
  try {
    const steps = await Step.find({})
    res.send(steps)
  } catch (error) {
    throw error
  }
}

const CreateStep = async (req, res) => {
  try {
    const step = await Step.create({ ...req.body })

    res.send(step)
  } catch (error) {
    throw error
  }
}
const UpdateStep = async (req, res) => {
  try {
    const step = await Step.findByIdAndUpdate(req.params.step_id, req.body, {
      new: true
    })
    res.send(step)
  } catch (error) {
    throw error
  }
}

const DeleteStep = async (req, res) => {
  try {
    await Step.deleteOne({ _id: req.params.step_id })
    res.send({ msg: 'Steps deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetSteps,
  CreateStep,
  UpdateStep,
  DeleteStep
}
