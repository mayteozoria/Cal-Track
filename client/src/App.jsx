import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
// import 'react-date-picker/dist/react-datepicker.css'
import Nav from './components/Nav'
// import Home from './components/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Food from './pages/Food'
import Step from './pages/Step'

import Diary from './pages/Diary'

import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/food" element={<Food />} />
          <Route path="/step" element={<Step />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
