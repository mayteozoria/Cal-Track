import { useState, useEffect } from 'react'
import { PostSteps, GetSteps } from '../services/StepServices'

const StepTracker = () => {
  const [steps, setSteps] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
    const handleSteps = async () => {
      const allSteps = await GetSteps()
      setSteps(steps)
      console.log(steps)
    }
    handleSteps()
  }, [])

  const addStep = async () => {
    const updateSteps = await PostSteps()
    setSteps([...steps, { date, count }])
    setCount(0)
  }
  return (
    <div>
      <h1>Step Tracker</h1>
      <div>
        <input type="number" value={count} />
        <button onClick={addStep}>Add Step</button>
      </div>
      <ul>
        {steps.map((step) => (
          <li key={step._id}>
            <span>{step.count} steps</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepTracker
