import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  return (
    <div className="signup-page">
      <div className="inside-box">
        <h2>Welcome! Just a few</h2>
        <h2>quick questions so we can customize</h2>
        <h2>CalTrack for you</h2>
        <button className="blue button" onClick={() => navigate('/signUpGoal')}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SignUp
