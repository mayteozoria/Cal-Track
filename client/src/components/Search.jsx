// import { Typography } from '@mui/material'
import * as React from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const Search = (props) => {
  return (
    <div className="search-form">
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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
        Search in FoodDatabase
        <form onSubmit={props.handleChange}>
          <input
            type="text"
            name="search"
            value={props.searchQuery}
            placeholder="Search Foods"
            onChange={props.onChange}
          ></input>
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </Typography>
    </div>
  )
}

export default Search
