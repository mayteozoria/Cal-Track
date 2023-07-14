import { useNavigate } from 'react-router-dom'
import dbblue from '/dbblue.png'
import food from '/food.png'

const Home = () => {
  // const navigate = useNavigate()
  return (
    <div className="home">
      <section className="welcome-page">
        <img src={dbblue} alt="dbell" />
        <img src={food} alt="food" />
      </section>
    </div>
  )
}
export default Home
