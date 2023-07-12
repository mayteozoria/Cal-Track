import { useState } from 'react'

const StepForm = ({ addStep }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() !== '') {
      const newStep = {
        id: Date.now(),
        title: title.trim()
      }
      addStep(newStep)
      setTitle('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter steps"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Step</button>
      </form>
    </div>
  )
}
export default StepForm
