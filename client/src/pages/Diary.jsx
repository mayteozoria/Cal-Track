import { GetFoods, DeleteFoods } from '../services/FoodServices'
import { useState, useEffect } from 'react'

const Diary = (props) => {
  const [allFoods, setAllFoods] = useState([])
  const [deleteFood, setDeleteFood] = useState(false)
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFats, setTotalFats] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)

  useEffect(() => {
    const handleFood = async () => {
      const foods = await GetFoods()
      setAllFoods(foods)

      calculateCalories(foods)
      calculateCarbs(foods)
      calculateFats(foods)
      calculateProtein(foods)
    }

    handleFood()
  }, [deleteFood])

  const handleDeleteClick = async (food_id) => {
    const deleteFood = await DeleteFoods(food_id)
    setDeleteFood((prevState) => (prevState = !prevState))
    console.log(deleteFood)
  }

  const calculateCalories = (foods) => {
    const total = foods.reduce((sum, foods) => sum + foods.calories, 0)
    let newCal = Math.trunc(total)
    setTotalCalories(newCal)
  }
  const calculateProtein = (foods) => {
    const protein = foods.reduce((sum, foods) => sum + foods.protein_g, 0)
    let newProtein = Math.trunc(protein)
    setTotalProtein(newProtein)
  }
  const calculateCarbs = (foods) => {
    const carbs = foods.reduce(
      (sum, foods) => sum + foods.carbohydrates_total_g,
      0
    )
    let newCarbs = Math.trunc(carbs)
    setTotalCarbs(newCarbs)
  }
  const calculateFats = (foods) => {
    const fats = foods.reduce((sum, foods) => sum + foods.fat_total_g, 0)
    let newFats = Math.trunc(fats)
    setTotalFats(newFats)
  }
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
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <td>Total Calories:{totalCalories}</td>
          <td>Carbs:{totalCarbs}</td>
          <td>Fats:{totalFats}</td>
          <td>Protein:{totalProtein}</td>
        </div>
      </div>
    </div>
  )
}
export default Diary
