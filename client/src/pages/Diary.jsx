import { GetFoods, DeleteFoods } from '../services/FoodServices'
import { useState, useEffect } from 'react'
// import FoodPie from '../components/FoodPie'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

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
    <Grid container direction="column" style={{ minHeight: '55vh' }}>
      <Grid item style={{ flexGrow: 1 }}>
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

        {/* <Grid> */}
        <TableContainer sx={{ marginBottom: 5 }} component={Paper}>
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
                  <TableCell align="center">{item.serving_size_g}g</TableCell>
                  <TableCell align="center">{item.protein_g}g</TableCell>
                  <TableCell align="center">{item.fat_total_g}g</TableCell>
                  <TableCell align="center">
                    {item.carbohydrates_total_g}g
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon onClick={() => handleDeleteClick(item._id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ width: 660 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: 'white' }}>
                Total Calories:{totalCalories}
              </TableCell>
              <TableCell style={{ backgroundColor: 'white' }}>
                Carbs:{totalCarbs}
              </TableCell>
              <TableCell style={{ backgroundColor: 'white' }}>
                Fats:{totalFats}
              </TableCell>
              <TableCell style={{ backgroundColor: 'white' }}>
                Protein:{totalProtein}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {/* </Table> */}
      {/* </TableContainer> */}
    </Grid>
    // </Grid>
  )
}
export default Diary
