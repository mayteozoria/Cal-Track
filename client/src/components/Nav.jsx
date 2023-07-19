import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 50,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Welcome {user.email}
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/macrocalculator"
              >
                MacroCal
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/diary"
              >
                Food Diary
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/step"
              >
                Steps
              </Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/weight"
              >
                Weight Tracker
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
