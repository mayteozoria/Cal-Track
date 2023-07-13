import { GetFoods, DeleteFoods, UpdateFood } from '../services/FoodServices'
import { useState, useEffect } from 'react'

const Diary = (props) => {
  const [allFoods, setAllFoods] = useState([])
  const [deleteFood, setDeleteFood] = useState(false)
  // const [editFood, setEditFood] = useEffect(false)

  useEffect(() => {
    const handleFood = async () => {
      const foods = await GetFoods()
      setAllFoods(foods)
      // console.log(foods)
    }
    handleFood()
  }, [deleteFood])

  const handleDeleteClick = async (food_id) => {
    const deleteFood = await DeleteFoods(food_id)
    setDeleteFood((prevState) => (prevState = !prevState))
    console.log(deleteFood)
  }
  // const handleEditClick = async (food_id) => {
  //   const editFood = await UpdateFood(food_id)
  //   setEditFood()
  // }
  return (
    <div className="diary">
      <h3>Your Food Diary:</h3>
      <div className="date">Date</div>
      <div className="dairy-container">
        <table>
          <thead>
            <tr>
              <th>Food</th>
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
            {allFoods.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.serving_size_g}g</td>
                <td>{item.protein_g}g</td>
                <td>{item.carbohydrates_total_g}g</td>
                <td>{item.fiber_g}g</td>
                <td>{item.fat_total_g}g</td>
                <td>{item.sugar_g}g</td>
                <td>{item.sodium_mg}mg</td>
                <td>
                  <input
                    type="button"
                    value="delete"
                    onClick={() => handleDeleteClick(item._id)}
                  />
                </td>
                <td>
                  {/* <input
                    type="button"
                    value="edit"
                    onClick={() => handleEditClick(item._id)}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Diary
