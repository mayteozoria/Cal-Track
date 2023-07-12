import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="welcome-page">
        <h1>Home</h1>
        <button onClick={() => navigate('/diary')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}
export default Home
