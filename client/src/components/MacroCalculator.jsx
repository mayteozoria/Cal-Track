import React, { useState, useEffect } from 'react'
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Box,
  Typography
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
    let newMacro = Math.trunc(weightLossCalories)
    setCalories(newMacro)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value)
  }

  return (
    <div>
      <Divider sx={{ my: 8 }} />
      <Typography variant="h3">Weight Loss Calories</Typography>
      <Divider sx={{ my: 4 }} />
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

      <Divider sx={{ my: 2 }} />
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select value={gender} onChange={handleGenderChange}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Activity Level</InputLabel>
          <Select value={activityLevel} onChange={handleActivityLevelChange}>
            <MenuItem value="sedentary">
              Sedentary (less than 5000 steps per day)
            </MenuItem>
            <MenuItem value="lightlyActive">
              Lightly Active (5,000 to 7,4999 per day)
            </MenuItem>
            <MenuItem value="moderatelyActive">
              Moderately Active (7,500 to 9,999 per day)
            </MenuItem>
            <MenuItem value="veryActive">
              Very Active (10,000 steps a day)
            </MenuItem>
            <MenuItem value="extraActive">
              Extra Active (more than 12,500 steps a day)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography variant="h3">
        <Button variant="contained" color="primary" onClick={calculateCalories}>
          Calculate
        </Button>
        {calories && (
          <p>Calories for weight loss: {calories} calories per day</p>
        )}
      </Typography>
    </div>
  )
}

export default MacroCalculator
