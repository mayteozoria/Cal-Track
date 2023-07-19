import { GetFoods, DeleteFoods } from '../services/FoodServices'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../globals'
import Search from '../components/Search'
import FoodResults from '../components/FoodResults'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import MacroCalculator from '../components/MacroCalculator'

const Diary = (props) => {
  const [allFoods, setAllFoods] = useState([])
  const [deleteFood, setDeleteFood] = useState(false)
  const [totalCalories, setTotalCalories] = useState(0)
  const [totalCarbs, setTotalCarbs] = useState(0)
  const [totalFats, setTotalFats] = useState(0)
  const [totalProtein, setTotalProtein] = useState(0)
  // const [goalCalories, setGoalCalories] = useState(0)

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

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getFoods = async () => {
    const response = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=` + searchQuery,
      { headers: { 'X-Api-Key': `${API_KEY}` } }
    )
    console.log(response)
    setSearchResults(response.data.items)
  }

  const handleChange = (e) => {
    e.preventDefault()
    console.log(searchQuery)
    getFoods()
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleDeleteClick = async (food_id) => {
    const deleteFood = await DeleteFoods(food_id)
    setDeleteFood((prevState) => (prevState = !prevState))
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

  const sizing = {
    margin: { right: 5 },
    width: 500,
    height: 500
  }
  const data = [
    { label: 'Carbs', value: totalCarbs, color: '#b7deb8' },
    { label: 'Fats', value: totalFats, color: '#fff9c4' },
    { label: 'Protein', value: totalProtein, color: '#ea605d' }
  ]
  const TOTAL = data.reduce((accumulator, item) => accumulator + item.value, 0)

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  return (
    <div>
      <div className="search">
        <Search
          handleChange={handleChange}
          onChange={onChange}
          searchQuery={searchQuery}
        />
        <FoodResults
          searchResults={searchResults}
          setAllFoods={setAllFoods}
          allFoods={allFoods}
        />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 200,
                letterSpacing: '.1rem',
                // minHeight: '5vh',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Food Diary
            </Typography>

            <TableContainer sx={{ marginBottom: 5 }}>
              <Table sx={{ width: 100 }} aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ width: 100 }}
                      style={{ backgroundColor: 'white', color: 'blue' }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Calories
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Serving Size&nbsp;(g)
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Protein&nbsp;(g)
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Fat&nbsp;(g)
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Carbs&nbsp;(g)
                    </TableCell>
                    <TableCell
                      style={{ backgroundColor: 'white', color: 'blue' }}
                      align="right"
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allFoods.map((item) => (
                    <TableRow
                      key={item._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="center">{item.calories}</TableCell>
                      <TableCell align="center">
                        {item.serving_size_g}g
                      </TableCell>
                      <TableCell align="center">{item.protein_g}g</TableCell>
                      <TableCell align="center">{item.fat_total_g}g</TableCell>
                      <TableCell align="center">
                        {item.carbohydrates_total_g}g
                      </TableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          onClick={() => handleDeleteClick(item._id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={4}>
            <TableContainer sx={{ alignContent: 'center', minHeight: '100vh' }}>
              <Table sx={{ width: 660 }}>
                <TableHead>
                  <TableRow>
                    {/* <TextField
                      lable="Macro"
                      value={goalCalories}
                      onChange={hand}
                    /> */}
                    <TableCell style={{ backgroundColor: 'white' }}>
                      Total Calories:{totalCalories}
                    </TableCell>
                    <TableCell style={{ backgroundColor: 'white' }}>
                      Carbs:{totalCarbs}g
                    </TableCell>
                    <TableCell style={{ backgroundColor: 'white' }}>
                      Fats:{totalFats}g
                    </TableCell>
                    <TableCell style={{ backgroundColor: 'white' }}>
                      Protein:{totalProtein}g
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>

          <Box flexGrow={1}>
            <Grid
              item
              xs={4}
              sx={{ alignContent: 'center', minHeight: '100vh' }}
            >
              <PieChart
                series={[
                  {
                    outerRadius: 250,
                    data,
                    arcLabel: (item) => `${item.label} (${item.value})`,
                    arcLabelMinAngle: 45
                  }
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 30
                  }
                }}
                {...sizing}
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  )
}
export default Diary
