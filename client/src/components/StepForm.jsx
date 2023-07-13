import { useState, useEffect } from 'react'
import { DeleteSteps, GetSteps, PostSteps } from '../services/StepServices'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [newStep, setNewStep] = useState({ steps: '' })
  const [deleteStep, setDeleteStep] = useState(false)
  // const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    const handleStep = async () => {
      const steps = await GetSteps()
      setSteps(steps)
      console.log(steps)
    }
    handleStep()
  }, [deleteStep])

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

  const handleDeleteClick = async (step_id) => {
    const deleteStep = await DeleteSteps(step_id)
    setDeleteStep((prevState) => (prevState = !prevState))
    console.log(deleteStep)
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
                <td>
                  <input
                    typt="button"
                    value="delete"
                    onClick={() => handleDeleteClick(steps._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default StepForm
