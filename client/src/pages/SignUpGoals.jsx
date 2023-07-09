import { useNavigate } from 'react-router-dom'

const SignUpGoal = () => {
  let navigate = useNavigate()
  return (
    <div className="signup-page">
      <div className="inside-box">
        <h2>Whai is your weight goal </h2>
        <h2>quick questions so we can customize</h2>
        <h2>CalTrack for you</h2>

        <button className="blue button" onClick={() => navigate('/signUpGoal')}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SignUpGoal
