const AddWeight = (props) => {
  return (
    <div>
      <h1>Enter Weight</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="number"
          name="weight"
          placeholder="Enter lbs"
          value={props.newWeight.weight}
          onChange={props.handleChange}
        />
        <button>Add Step</button>
      </form>
    </div>
  )
}
export default AddWeight
