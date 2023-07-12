const mongoose = require('mongoose')
const userSchema = require('./User')
const foodSchema = require('./Food')
const stepSchema = require('./Step')
const weightSchema = require('./Weight')

const User = mongoose.model('User', userSchema)
const Food = mongoose.model('Food', foodSchema)
const Step = mongoose.model('Step', stepSchema)
const Weight = mongoose.model('Weight', weightSchema)

module.exports = {
  User,
  Food,
  Step,
  Weight
}
