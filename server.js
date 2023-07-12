const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')

const FoodRouter = require('./routes/FoodRouter')
const StepRouter = require('./routes/StepRouter')
const WeightRouter = require('./routes/WeightRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)

app.use('/foods', FoodRouter)
app.use('/steps', StepRouter)
app.use('/weight', WeightRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
