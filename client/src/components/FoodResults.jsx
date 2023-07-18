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
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/Addbox'

const FoodResults = (props) => {
  const [newFood, setFood] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleAddClick = async (e) => {
    e.preventDefault()
    let newFood = await PostFoods(props.searchResults[0])
    setAmount('')
  }

  return (
    <Typography
      variant="h6"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 200,
        letterSpacing: '.1rem',
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
                align="right"
              >
                Calories
              </TableCell>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
                align="right"
              >
                Serving Size&nbsp;(g)
              </TableCell>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
                align="right"
              >
                Protein&nbsp;(g)
              </TableCell>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
                align="right"
              >
                Fat&nbsp;(g)
              </TableCell>
              <TableCell
                sx={{ width: 100 }}
                style={{ backgroundColor: 'white', color: 'blue' }}
                align="right"
              >
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
                <TableCell align="right">
                  {item.carbohydrates_total_g}g
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleAddClick}
        >
          <AddBoxIcon />
        </IconButton>
      </TableContainer>
    </Typography>
  )
}
export default FoodResults
