import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  return (
    <div className="signup-page">
      <div>Welcome! Just a few</div>
      <div>quick questions so we can customize</div>
      <div>CalTrack for you</div>
      <button onClick={() => navigate('/signUpGoal')}>Continue</button>
    </div>
  )
}

export default SignUp
