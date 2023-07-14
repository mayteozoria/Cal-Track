import { useState } from 'react'
import StepForm from '../components/StepForm'

const Step = () => {
  const [steps, setSteps] = useState([])

  return (
    <div>
      <StepForm steps={steps} setSteps={setSteps} />
    </div>
  )
}
export default Step
