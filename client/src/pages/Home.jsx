import { Link } from 'react-router-dom'
import dbblue from '/dbblue.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { createTheme, ThemeProvider } from '@mui/material/styles'
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CalTrack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const defaultTheme = createTheme()

const About = () => {
  // const navigate = useNavigate()
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="white" noWrap>
            {/* Album layout */}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Health starts with what you eat.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Meet your health goals by tracking your calories, weight, and
              steps in Caltrack. Get nutritional data for 100,000 + foods and
              beverages via the "search foods" section. The app allows users to
              track proteins, carbs, fats in the food diary. Log in steps and
              weight to monitor progess and health goals.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button style={{ textColor: 'white' }} variant="contained">
                <Link
                  // component="button"
                  // underline="none"
                  style={{ color: 'white', textDecoration: 'none' }}
                  to="/newsignup"
                >
                  Start For Free
                </Link>
              </Button>
            </Stack>
            <Link to="/newlogin" style={{ color: 'black', align: 'center' }}>
              Already have an account? Sign in
            </Link>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%'
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
export default About
