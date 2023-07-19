import * as React from 'react'
import { useState, useEffect } from 'react'
import { GetFoods } from '../services/FoodServices'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import Diary from './Diary'
const Start = (props) => {
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFats, setTotalFats] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  const [allFoods, setAllFoods] = useState([])

  useEffect(() => {
    const handleFood = async () => {
      const foods = await GetFoods()
      setAllFoods(foods)
      calculateCalories(foods)
      calculateCarbs(foods)
      calculateFats(foods)
      calculateProtein(foods)
    }

    console.log(allFoods)
    handleFood()
  }, [])

  const sizing = {
    margin: { right: 5 },
    width: 500,
    height: 500,
    legend: { hidden: true }
  }
  const data = [
    { label: 'Carbs', value: { totalCarbs }, color: 'red' },
    { label: 'Fat', value: { totalFats }, color: 'blue' },
    { label: 'Protein', value: { totalProtein }, color: 'purple' }
  ]
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

  return <PieChart></PieChart>
}

export default Start
