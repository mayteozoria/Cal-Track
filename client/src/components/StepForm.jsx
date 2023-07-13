import { useState, useEffect } from 'react'
import { GetSteps, PostSteps } from '../services/StepServices'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [newStep, setNewStep] = useState({ date: '', steps: '' })
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const handleStep = async () => {
      const steps = await GetSteps()
      setSteps(steps)
      console.log(steps)
    }
    handleStep()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSteps = await PostSteps(newStep)
    setSteps([...steps, newSteps])
    setNewStep({ steps: '' })
    console.log(newSteps)
  }
  const handleChange = (e) => {
    setNewStep({ ...newStep, steps: e.target.value })
  }

  return (
    <div className="step-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="steps"
          placeholder="Enter steps"
          value={newStep.steps}
          onChange={handleChange}
        />
        {/* <DatePicker
          selectedDate={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="Pp"
        /> */}
        <button>Add Step</button>
      </form>

      <div className="step-table">
        <table>
          <tbody>
            <tr>
              <th>Steps</th>
              <th>Date</th>
            </tr>
            {steps.map((steps) => (
              <tr key={steps._id}>
                <td className="steps">{steps.steps}</td>
                <td className="steps">{steps.selectedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default StepForm
