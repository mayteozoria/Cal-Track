import { useState, useEffect } from 'react'
import { GetSteps, PostSteps, DeleteSteps } from '../services/StepServices'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import AddStep from './AddStep'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [newStep, setNewStep] = useState({ description: '', steps: '' })
  const [deleteStep, setDeleteStep] = useState(false)
  const [editForm, setEditForm] = useState('')

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
    setNewStep({ description: '', steps: '' })
    console.log(newSteps)
  }
  const handleChange = (e) => {
    setNewStep({ ...newStep, [e.target.name]: e.target.value })
  }

  const handleDeleteClick = async (step_id) => {
    const deleteStep = await DeleteSteps(step_id)
    setDeleteStep((prevState) => (prevState = !prevState))
    console.log(deleteStep)
  }

  const handleEditClick = (e, step_id) => {
    e.preventDefault()
    setEditForm(step_id)
  }
  return (
    <div>
      <AddStep
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newStep={newStep}
      />
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
                <td className="steps">{steps.description}</td>
                <td>
                  <input
                    className="edit-button"
                    type="button"
                    value="edit"
                    onClick={(e) => handleEditClick(steps.id)}
                  />
                </td>
                <td>
                  <input
                    className="delete-button"
                    type="button"
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
