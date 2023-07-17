import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import KitchenIcon from '@mui/icons-material/Kitchen'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <AppBar position="static">
          <Toolbar>
            <h3>Welcome {user.email}</h3>
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
              <Link to="/diary">Food Diary</Link>
              <Link to="/weight">Weight Tracker</Link>
              <Link to="/food">Add Foods</Link>
              <Link to="/step">Steps</Link>
              <Link onClick={handleLogOut} to="/">
                Log Out
              </Link>
              <Link to="/home">Home</Link>
              {/* </Box> */}
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <AppBar position="static">
        <Toolbar>
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
            {/* <h3>myCalTrack</h3> */}
            <Link to="/newsignup">Sign Up</Link>
            <Link to="/newlogin">Log In</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  )

  return (
    <div className="navbar">
      <header>
        <Link to="/home">
          <div className="welcome-bar" alt="home"></div>
        </Link>

        {user ? userOptions : publicOptions}
      </header>
    </div>
  )
}

export default Nav
