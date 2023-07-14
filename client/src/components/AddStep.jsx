import React from 'react'

const AddStep = ({ steps, handleDeleteClick, handleEditClick }) => {
  return (
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
                  onClick={(e) => handleEditClick(e, steps, description)}
                />
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
  )
}
export default AddStep
