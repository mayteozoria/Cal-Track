import { useState } from 'react'

const AddFood = () => {
  const [name, setName] = useState('')
  const [calorie, setCalorie] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({ name, calorie })
    setName('')
    setCalories('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="calorie">
        <div className="calorie col">
          <div className="col">
            <label className="add-form">Food Name</label>
            <input
              type="text"
              name="food"
              id="food"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Food name"
            />
          </div>
          <div>
            <label htmlFor="calorie" className="form-label visually-hidden">
              Calorie
            </label>
            <input
              type="number"
              name="number"
              id="number"
              required
              value={calorie}
              onChange={(e) => setCalorie(e.target.value)}
              placeholder="Calorie amount"
            />
          </div>
        </div>
        <button type="submit" className="add-button"></button>
      </form>
    </div>
  )
}

export default AddFood
