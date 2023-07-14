const { Schema } = require('mongoose')

const stepSchema = new Schema(
  {
    steps: { type: Number, required: true },
    description: { type: String }
    // Date: { type: Date, required: true }
  },
  { timestamps: true }
)

module.exports = stepSchema
