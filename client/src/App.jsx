import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'

import NewLogIn from './pages/NewLogIn'
import Food from './pages/Food'
import Step from './pages/Step'
import MacroCalculator from './components/MacroCalculator'
import WeightTracker from './pages/WeightTracker'
import Diary from './pages/Diary'
import NewSignUp from './pages/NewSignUp'
import Home from './pages/Home'

import './App.css'
// import FoodPie from './components/FoodPie'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/newlogin" element={<NewLogIn setUser={setUser} />} />
          <Route path="/food" element={<Food />} />
          <Route path="/step" element={<Step />} />
          <Route path="/diary" element={<Diary />} />

          <Route path="/weight" element={<WeightTracker />} />
          <Route path="/macrocalculator" element={<MacroCalculator />} />
          <Route path="/newsignup" element={<NewSignUp />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
