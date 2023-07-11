import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogInUser } from '../services/Auth'

const LogIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LogInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/food')
  }

  return (
    <div className="container">
      <div className="card-overlay centered">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
