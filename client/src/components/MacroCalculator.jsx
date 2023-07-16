import React, { useState, useEffect } from 'react'
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'
// import { GetWeight } from './services/WeightServices'

const MacroCalculator = () => {
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [calories, setCalories] = useState('')
  const [goal, setGoal] = useState('')
  const [goalLevel, setGoalLevel] = useState('')

  const calculateCalories = () => {
    const totalHeightInches =
      parseInt(heightFeet, 10) * 12 + parseInt(heightInches, 10)

    let bmr
    if (gender === 'male') {
      bmr = 66 + 6.2 * weight + 12.7 * totalHeightInches - 6.76 * age
    } else if (gender === 'female') {
      bmr = 655 + 4.35 * weight + 4.7 * totalHeightInches - 4.7 * age
    } else {
      return
    }

    let tdee
    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2
        break
      case 'lightlyActive':
        tdee = bmr * 1.375
        break
      case 'moderatelyActive':
        tdee = bmr * 1.55
        break
      case 'veryActive':
        tdee = bmr * 1.725
        break
      case 'extraActive':
        tdee = bmr * 1.9
        break
      default:
        return
    }

    const weightLossCalories = tdee - 500

    setCalories(weightLossCalories)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value)
  }

  return (
    <div>
      <h1> Weight Loss Calories</h1>
      <FormControl>
        <TextField
          label="Height (feet)"
          value={heightFeet}
          onChange={(e) => setHeightFeet(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Height (inches)"
          value={heightInches}
          onChange={(e) => setHeightInches(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={handleGenderChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Activity Level</InputLabel>
        <Select value={activityLevel} onChange={handleActivityLevelChange}>
          <MenuItem value="sedentary">
            Sedentary (little to no exercise)
          </MenuItem>
          <MenuItem value="lightlyActive">
            Lightly Active (light exercise/sports 1-3 days/week)
          </MenuItem>
          <MenuItem value="moderatelyActive">
            Moderately Active (moderate exercise/sports 3-5 days/week)
          </MenuItem>
          <MenuItem value="veryActive">
            Very Active (hard exercise/sports 6-7 days/week)
          </MenuItem>
          <MenuItem value="extraActive">
            Extra Active (very hard exercise/sports & physical job or 2x
            training)
          </MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={calculateCalories}>
        Calculate
      </Button>
      {calories && <p>Calories for weight loss: {calories} calories per day</p>}
    </div>
  )
}

export default MacroCalculator
