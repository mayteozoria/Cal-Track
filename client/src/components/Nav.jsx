import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <AppBar position="static" sx={{ color: 'white' }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 200,
                letterSpacing: '.1rem',
                color: 'white',
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
                color: 'white',
                textDecoration: 'none'
              }}
            >
              <Link underline="none" to="/diary">
                Food Diary
              </Link>
              <Link to="/weight">Weight Tracker</Link>
              <Link to="/food">Add Foods</Link>
              <Link to="/step">Steps</Link>
              <Link onClick={handleLogOut} to="/">
                Log Out
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <AppBar position="relative" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography
            variant="h5"
            // gutterBottom
            // marked="center"
            align="center"
            underline="none"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Helvetica Neue"',
              fontWeight: 50,
              letterSpacing: '.1rem',
              color: 'black',
              backgroundColor: 'white',
              textDecoration: 'none'
            }}
          >
            <Link underline="none" to="/"></Link>
            <Link
              underline="none"
              sx={{ backgroundColor: 'white' }}
              to="/newsignup"
            >
              Sign Up
            </Link>
            <Link to="/newlogin">Sign In</Link>
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
