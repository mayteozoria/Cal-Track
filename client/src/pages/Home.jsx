import { Link } from 'react-router-dom'
import dbblue from '/dbblue.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

const About = () => {
  // const navigate = useNavigate()
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <p>
            Meet your health goals by tracking your calories, weight, and steps
            in Caltrack. Get nutritional information from the food Database via
            "search foods" section. The app allows user to tracks proteins,
            carbs, fats, sodium, and sugar in the food diary. Log in steps and
            weight to monitor progess and health goals.
            <br></br>
            <Link to="/macroCalculator">
              <button>
                Calculate my macros for WeightLoss
                <FitnessCenterIcon />
              </button>
            </Link>
          </p>
        </div>
        <div className="column-33">
          <img src={dbblue} alt="dbell" width="335" height="471" />
        </div>
      </div>
    </div>
  )
}
export default About
