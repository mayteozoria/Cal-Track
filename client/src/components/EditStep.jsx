import React from 'react'

const EditSteps = ({ editStep, handleEditChange, handleCancelClick }) => {
  return (
    <div className="step-form">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="steps"
          placeholder="Enter steps"
          value={editStep.steps}
          onChange={handleEditChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter an activity..."
          value={editStep.description}
          onChange={handleEditChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}></button>
      </form>
    </div>
  )
}

export default EditSteps
