import { Link } from 'react-router-dom'
import dbblue from '/dbblue.png'

const Home = () => {
  // const navigate = useNavigate()
  return (
    <div className="container">
      <div className="row">
        <div className="column-66">
          <p>
            Meet your health goals by tracking your calories and steps in
            Caltrack. The app tracks proteins, carbs, fats, sodium, and sugar.
            Breakfast, lunch and dinner can be separetly added to the daily food
            log. As the user logs their meals, the app calculates their total
            calories and returns the remaining calories left for the day.
            <br></br>
            <Link to="/macroCalculator">
              <button>Calculate my macros</button>
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
export default Home
