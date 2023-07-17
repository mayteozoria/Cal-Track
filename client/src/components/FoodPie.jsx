import * as React from 'react'
import { useState, useEffect } from 'react'
import { GetFoods } from '../services/FoodServices'
import { PieChart } from '@mui/x-charts/PieChart'

const FoodPie = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const handleFood = async () => {
      const food = await GetFoods()
      setFoods(foods)
      console.log(foods)
    }

    handleFood()
  }, [])

  const chartData = {
    labels: foods.map((food) => item.name),
    datasets: [
      {
        data: foods.map((food) => item.calories),
        backgroundColor: ['blue']
      }
    ]
  }
  return <PieChart data={chartData} />
}

export default FoodPie
