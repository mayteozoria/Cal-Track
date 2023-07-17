import { useState, useEffect } from 'react'
import {
  GetSteps,
  PostSteps,
  DeleteSteps,
  UpdateSteps
} from '../services/StepServices'

import AddStep from './AddStep'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [newStep, setNewStep] = useState({ description: '', steps: '' })
  const [deleteStep, setDeleteStep] = useState(false)
  const [editStep, setEditStep] = useState([])

  useEffect(() => {
    const handleStep = async () => {
      const steps = await GetSteps()
      setSteps(steps)
    }
    handleStep()
  }, [deleteStep])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSteps = await PostSteps(newStep)
    setSteps([...steps, newSteps])
    setNewStep({ description: '', steps: '' })
  }
  const handleChange = (e) => {
    setNewStep({ ...newStep, [e.target.name]: e.target.value })
  }

  const handleDeleteClick = async (step_id) => {
    const deleteStep = await DeleteSteps(step_id)
    setDeleteStep((prevState) => (prevState = !prevState))
  }

  const handleEditClick = async (step_id) => {
    const editSteps = await UpdateSteps(step_id)
    setEditStep([...steps, editStep])
    setNewStep({ description: '', steps: '' })
    console.log(step_id)
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
