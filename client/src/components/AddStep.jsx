import { Typography, Divider, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddStep = (props) => {
  return (
    <div className="step-form">
      <Divider sx={{ my: 4 }} />
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
        Enter steps:
        {/* <Divider sx={{ my: 8 }} /> */}
        <form onSubmit={props.handleSubmit}>
          <input
            type="number"
            name="steps"
            placeholder="Enter steps"
            value={props.newStep.steps}
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="walking or running"
            value={props.newStep.description}
            onChange={props.handleChange}
          />
          <Button>
            Add
            {/* <AddIcon /> */}
          </Button>
        </form>
      </Typography>
    </div>
  )
}

export default AddStep
