const { Schema } = require('mongoose')

const foodSchema = new Schema({
  name: String,
  quantity: Number,
  calories: Number,
  carbs: Number,
  fats: Number,
  protein: Number,
  sodium: Number,
  sugar: Number
})

module.exports = foodSchema
