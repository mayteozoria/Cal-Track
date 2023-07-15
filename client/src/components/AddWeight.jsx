import { useState } from 'react'

const AddWeight = (props) => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [bmr, newBmr] = useState(0)

  let calcBmi = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      console.log('')
    }
  }
  return <div></div>
}
export default AddWeight
