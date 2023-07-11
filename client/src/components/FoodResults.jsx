import { useState } from 'react'
import { PostFoods } from '../services/FoodServices'

const FoodResults = (props) => {
  const [newFood, setFood] = useState(0)
  const [deleteFood, setRemove] = useState([''])
  console.log(props.searchResults)

  const handleAddClick = async (e) => {
    e.preventDefault()
    let newFood = await PostFoods(props.searchResults[0])

    console.log(newFood)
  }

  return (
    <div className="search-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Serving Size</th>
            <th>Protein</th>
            <th>Carbohydrates</th>
            <th>Fiber</th>
            <th>Fat</th>
            <th>Sugar</th>
            <th>Sodium</th>
          </tr>
        </thead>
        <tbody>
          {props.searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.calories}g</td>
              <td>{item.serving_size_g}g</td>
              <td>{item.protein_g}g</td>
              <td>{item.carbohydrates_total_g}g</td>
              <td>{item.fiber_g}g</td>
              <td>{item.fat_total_g}g</td>
              <td>{item.sugar_g}g</td>
              <td>{item.sodium_mg}mg</td>
              <button type="button" onClick={handleAddClick}>
                Add Food to Diary
              </button>
              {/* <button
                type="button"
                onClick={(event) => handleEditClick(event, item)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={(event) => handleDeleteClick(item.id)}
              >
                Delete
              </button> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default FoodResults
