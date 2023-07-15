import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './components/Home'
import NewLogIn from './pages/NewLogIn'
import Food from './pages/Food'
import Step from './pages/Step'
import Weight from './pages/Weight'
import Diary from './pages/Diary'
import NewSignUp from './pages/NewSignUp'

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
          <Route path="/" element={<Home />} />
          <Route path="/newlogin" element={<NewLogIn setUser={setUser} />} />
          {/* <Route path="/newlogin" element={<NewLogIn setUser={setUser} />} /> */}

          <Route path="/food" element={<Food />} />
          <Route path="/step" element={<Step />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/newsignup" element={<NewSignUp />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
