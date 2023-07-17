import { useState, useEffect } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
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

import { Icon } from '@mui/material'

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
  // const [editIndex, setEditIndex] = useState(-1)

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

  const handleUpdate = async (weight_id) => {
    const editWeight = await UpdateWeight(weight_id)
    setWeight(weight)
    // setEditWeight([...weight, editWeight])
    // setNewWeight({ weight: '', date: '' })
    console.log(weight_id)
  }

  const handleEdit = (weight_id) => {
    setEditWeight(weight_id)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handleInputChange = (e) => {
    setNewWeight(e.target.value)
  }

  const handleSave = async (weight_id) => {
    const saveWeight = await UpdateWeight(weight_id)
    setWeight(saveWeight)
    setEditWeight(null)
    setNewWeight('')
  }

  const handleDeleteWeight = async (weight_id) => {
    const deleteWeight = await DeleteWeight(weight_id)
    setDeleteWeight((prevState) => (prevState = !prevState))
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select date"
          type="date"
          name="select date"
          placeholder="Date"
          variant="outlined"
          value={newWeight.date}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
      <Button variant="contained" onClick={handleAddWeight}>
        Add
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        {/* </Table> */}
        <TableBody>
          {weight.map((weight) => (
            <TableRow key={weight._id}>
              <TableCell>
                {editWeight === weight._id ? (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select date"
                      type="date"
                      name="select date"
                      placeholder="Date"
                      variant="outlined"
                      value={newWeight.date}
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                ) : (
                  weight.date
                )}
              </TableCell>
              <TableCell>{weight.weight}</TableCell>
              <TableCell>{weight.date}</TableCell>
              <TableCell>
                {editWeight === weight._id ? (
                  <TextField value={newWeight} onChange={handleInputChange} />
                ) : (
                  weight.weight
                )}
              </TableCell>
              <TableCell>
                {editWeight === weight._id ? (
                  <IconButton onClick={() => handleSave(weight._id)}>
                    Save
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEdit(weight._id)}>
                    Edit
                  </IconButton>
                )}
                <IconButton onClick={() => handleDelete(weight._id)}>
                  Delete
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
