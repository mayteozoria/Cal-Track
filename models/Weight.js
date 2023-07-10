const { Weight } = require('mongoose')

const weightSchema = newSchema(
  {
    weight: { type: Number }
  },
  { timestamps: true }
)
module.exports = weightSchema
