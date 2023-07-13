import { useState, useEffect } from 'react'
import { GetSteps } from '../services/StepServices'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
    const handleStep = async () => {
      const steps = await GetSteps()
      setSteps(steps)
      console.log(steps)
    }
    handleStep()
  }, [])

  const handleAddStep = () => {}

  return (
    <div>
      <input
        type="number"
        placeholder="Enter steps"
        value={count}
        // onChange={handleInputChange}
      />
      <button onClick={handleAddStep}>Add Step</button>
      <div>
        {steps.map((steps) => (
          <div key={steps._id}>
            <div>{steps.steps}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default StepForm
