const { Schema } = require('mongoose')

const foodSchema = new Schema(
  {
    name: String,
    numberOfServings: Number,
    servingSize: Number,
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number
  },
  { timestamps: true }
)

module.exports = foodSchema
