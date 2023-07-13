import { useState } from 'react'
import StepForm from '../components/StepForm'

const Step = () => {
  const [steps, setSteps] = useState([])

  return (
    <div>
      <StepForm steps={steps} set={setSteps} />
      {/* <StepTracker /> */}
    </div>
  )
}
export default Step
