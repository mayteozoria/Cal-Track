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
    e.preventDefault()
    setNewWeight({ ...newWeight, [e.target.name]: e.target.value })
  }

  const handleSave = async (id, idx) => {
    const saveWeight = await UpdateWeight(id, newWeight)
    let weightArr = [...weight]
    weightArr.splice(idx, 1, saveWeight)
    setWeight(weightArr)
    setEditWeight(null)
    setNewWeight({ weight: '', date: '' })
  }

  const handleDelete = async (weight_id) => {
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
          {weight.map((item, idx) => (
            <TableRow key={item._id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                {editWeight === item._id ? (
                  <TextField
                    label="Update weight"
                    type="number"
                    name="weight"
                    placeholder="Enter lbs"
                    variant="outlined"
                    value={newWeight.weight}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.weight
                )}
              </TableCell>
              <TableCell>
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
