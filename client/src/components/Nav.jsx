import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
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
              Welcome {user.email}
            </Typography>

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
              {/* <Link to="/home">Home</Link> */}
              <Link to="/home">Home</Link>
              <Link to="/diary">Food Diary</Link>
              <Link to="/weight">Weight Tracker</Link>
              <Link to="/food">Add Foods</Link>
              <Link to="/step">Steps</Link>
              <Link onClick={handleLogOut} to="/newlogin">
                Log Out
              </Link>
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
