import { useState } from 'react'
import { PostWeight } from '../services/WeightServices'
import React from 'react'
import AddWeight from '../components/AddWeight'

const Weight = () => {
  const [weight, setWeight] = useState([])
  const [newWeight, setNewWeight] = useState({ weight: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newWeights = await PostWeight(newWeight)
    setWeight([...weight, newWeights])
    setNewWeight({ weight: '' })

    console.log(newWeight)
  }

  const handleChange = (e) => {
    setNewWeight({ ...newWeight, [e.target.name]: e.target.value })
    // console.log(newWeight)
  }

  return (
    <>
      <div className="App">
        <AddWeight
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          newWeight={newWeight}
        />
      </div>
    </>
  )
}

export default Weight
