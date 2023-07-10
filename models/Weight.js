const { Schema } = require('mongoose')

const weightSchema = new Schema(
  {
    weight: { type: Number }
  },
  { timestamps: true }
)
module.exports = weightSchema
