import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <AppBar position="static">
          <Toolbar variant="dense">
            <h3>Welcome {user.email}</h3>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 100,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/diary"
              >
                Food Diary
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/weight"
              >
                Weight Tracker
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/food"
              >
                Add Foods
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/step"
              >
                Steps
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                onClick={handleLogOut}
                to="/"
              >
                Log Out
              </Link>
              {/* <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                Home
              </Link> */}
              {/* </Box> */}
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
    )
  }

  const publicOptions = (
    // <nav className="navbar">
    <Box sx={{ m: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 200,

              wordSpacing: '2 rem',

              textDecoration: 'none'
            }}
          >
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              CalTrack&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to="/newsignup"
            >
              Sign Up
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to="/newlogin"
            >
              Sign In
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="blue"
            gutterBottom
          >
            <Link to="/"></Link>

            {user ? userOptions : publicOptions}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
