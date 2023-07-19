const { Schema } = require('mongoose')

const weightSchema = new Schema(
  {
    weight: { type: Number },
    date: { type: Date }
  },
  { timestamps: true }
)
module.exports = weightSchema
