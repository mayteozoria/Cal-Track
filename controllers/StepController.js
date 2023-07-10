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

module.exports = {
  GetSteps,
  CreateStep
}
