const AddStep = (props) => {
  return (
    <div className="step-form">
      <h2>Enter steps:</h2>
      <form onSubmit={props.handleSubmit}>
        <input
          type="number"
          name="steps"
          placeholder="Enter steps"
          value={props.newStep.steps}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="walking or running"
          value={props.newStep.description}
          onChange={props.handleChange}
        />
        <button>Add Step</button>
      </form>
    </div>
  )
}

export default AddStep
