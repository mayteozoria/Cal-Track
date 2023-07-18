import { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import {
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import {
  GetWeight,
  PostWeight,
  DeleteWeight,
  UpdateWeight
} from '../services/WeightServices'

const WeightTracker = () => {
  const [weight, setWeight] = useState([])
  const [newWeight, setNewWeight] = useState({ weight: '', date: '' })
  const [deleteWeight, setDeleteWeight] = useState(false)
  const [editWeight, setEditWeight] = useState(null)
  // const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    handleWeight()
  }, [deleteWeight])

  const handleWeight = async () => {
    const weight = await GetWeight()
    setWeight(weight)
  }
  const handleAddWeight = async (e) => {
    e.preventDefault()
    const newWeights = await PostWeight(newWeight)
    handleWeight()
    setNewWeight({ weight: '', date: '' })

    console.log(newWeight)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setNewWeight({ ...newWeight, [e.target.name]: e.target.value })
  }

  const handleEdit = async (weight_id) => {
    const editWeight = await UpdateWeight(weight_id)
    setEditWeight(weight_id)
    console.log(weight_id)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handleInputChange = (e) => {
    // e.preventDefault()
    setNewWeight({ ...newWeight, [e.target.name]: e.target.value })
  }

  const handleSave = async (id, idx) => {
    const saveWeight = await UpdateWeight(id, newWeight)
    let weightArr = [...weight]
    weightArr.splice(idx, 1, saveWeight)
    setWeight(weightArr)
    setEditWeight(null)
    setNewWeight({ weight: '', date: '' })
    console.log(saveWeight)
  }

  const handleDelete = async (weight_id) => {
    const deleteWeight = await DeleteWeight(weight_id)
    setDeleteWeight((prevState) => (prevState = !prevState))
  }

  return (
    <div>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 200,
          letterSpacing: '.1rem',
          minHeight: '8vh',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        Weight Tracker
      </Typography>
      <TextField
        label="New Weight"
        type="number"
        name="weight"
        placeholder="Enter lbs"
        variant="outlined"
        value={newWeight.weight}
        onChange={handleChange}
      />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select date"
          name="date"
          placeholder="Date"
          format="MM - DD - YYYY"
          defaultValue={dayjs('07-1-2022')}
          variant="outlined"
          value={newWeight.date}
          onChange={handleDateChange}
        />
      </LocalizationProvider> */}
      <Button variant="contained" onClick={handleAddWeight}>
        Add
      </Button>
      <Table sx={{ width: 300 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <TableCell
              align="right"
              sx={{ width: 100 }}
              style={{ backgroundColor: 'white', color: 'blue' }}
            >
              Date
            </TableCell> */}
            <TableCell
              align="right"
              // sx={{ width: 200 }}
              style={{ backgroundColor: 'white', color: 'blue' }}
            >
              Weight
            </TableCell>
            <TableCell
              align="right"
              // sx={{ width: 200 }}
              style={{ backgroundColor: 'white', color: 'blue' }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        {/* </Table> */}
        <TableBody>
          {weight.map((item, idx) => (
            <TableRow align="right" key={item._id}>
              {/* <TableCell>{item.weight}</TableCell> */}

              <TableCell align="right">
                {editWeight === item._id ? (
                  <TextField
                    label="Update weight"
                    type="number"
                    name="weight"
                    placeholder="Enter lbs"
                    variant="outlined"
                    value={item.newWeight}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.weight
                )}
              </TableCell>
              <TableCell align="right">
                {editWeight === item._id ? (
                  <IconButton onClick={() => handleSave(item._id, idx)}>
                    Save
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEdit(item._id)}>
                    <EditIcon />
                  </IconButton>
                )}
                <IconButton
                  className="delete-button"
                  type="button"
                  value="delete"
                  onClick={() => handleDelete(item._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default WeightTracker
