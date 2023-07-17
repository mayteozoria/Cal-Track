import { useState } from 'react'
import { PostFoods } from '../services/FoodServices'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const FoodResults = (props) => {
  const [newFood, setFood] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleAddClick = async (e) => {
    e.preventDefault()
    let newFood = await PostFoods(props.searchResults[0])
    setAmount('')
  }

  return (
    // <div className="search-table">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>Name</TableCell>
            <TableCell style={{ color: 'white' }} align="right">
              Calories
            </TableCell>
            <TableCell style={{ color: 'white' }} align="right">
              Serving Size&nbsp;(g)
            </TableCell>
            <TableCell style={{ color: 'white' }} align="right">
              Protein&nbsp;(g)
            </TableCell>
            <TableCell style={{ color: 'white' }} align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell style={{ color: 'white' }} align="right">
              Carbs&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.searchResults.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.calories}</TableCell>
              <TableCell align="right">{item.serving_size_g}g</TableCell>
              <TableCell align="right">{item.protein_g}g</TableCell>
              <TableCell align="right">{item.fat_total_g}g</TableCell>
              <TableCell align="right">{item.carbohydrates_total_g}g</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button type="button" onClick={handleAddClick}>
        Add to Food Diary
      </Button>
    </TableContainer>
  )
}
export default FoodResults
