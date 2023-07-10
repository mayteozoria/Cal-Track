const { Schema } = require('mongoose')

const stepSchema = new Schema(
  {
    steps: { type: Number }
  },
  { timestamps: true }
)

module.exports = stepSchema
