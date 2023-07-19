import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            ></Typography>
            <Typography variant="h6" sx={{ flexGrow: 1, align: 'left' }}>
              Welcome {user.email}
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                underline: 'none',
                mr: 7,
                wordSpacing: '2rem',
                flexGrow: 1,
                textDecoration: 'none',
                align: 'right'
              }}
            >
              <Link to="/"></Link>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                underline="none"
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
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      // </nav>
    )
  }

  const publicOptions = (
    // <nav className="navbar">
    <AppBar position="relative" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography
          variant="h5"
          gutterBottom
          marked="center"
          align="center"
          underline="none"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Helvetica Neue',
            fontWeight: 50,
            letterSpacing: '.1rem',
            color: 'white',
            backgroundColor: 'white',
            textDecoration: 'none'
          }}
        >
          <Link underline="none" to="/">
            CalTrack
          </Link>
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
    // </nav>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="blue"
            gutterBottom
          >
            <Link to="/home"></Link>

            {user ? userOptions : publicOptions}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
