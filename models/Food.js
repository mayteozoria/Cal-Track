const { Schema } = require('mongoose')

const foodSchema = new Schema(
  {
    name: String,
    calories: Number,
    service_size_g: Number,
    protein_g: Number,
    carbohydrates_total_g: Number,
    fat_total_g: Number,
    fiber_g: Number,
    sodium_mg: Number,
    sugar_g: Number
  },
  { timestamps: true }
)

module.exports = foodSchema
