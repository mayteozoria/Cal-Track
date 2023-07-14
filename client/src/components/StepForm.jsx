import { useState, useEffect } from 'react'
import {
  GetSteps,
  PostSteps,
  DeleteSteps,
  UpdateSteps
} from '../services/StepServices'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import AddStep from './AddStep'

const StepForm = () => {
  const [steps, setSteps] = useState([])
  const [newStep, setNewStep] = useState({ description: '', steps: '' })
  const [deleteStep, setDeleteStep] = useState(false)
  const [editStep, setEditStep] = useState(null)

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

  const handleEditChange = (e) => {
    e.preventDefault()
    const newSteps = PostSteps(newStep)
  }
  return (
    <div className="step-form">
      <h2>Add Steps and Activity:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="steps"
          placeholder="Enter steps"
          value={newStep.steps}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder=""
          value={newStep.description}
          onChange={handleChange}
        />
        <button>Add Step</button>
      </form>
      <AddStep steps={steps} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}
export default StepForm
