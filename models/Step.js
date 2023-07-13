const { Schema } = require('mongoose')

const stepSchema = new Schema(
  {
    steps: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

module.exports = stepSchema
