import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import NewLogIn from './pages/NewLogIn'
import Step from './pages/Step'
import MacroCalculator from './components/MacroCalculator'
import WeightTracker from './pages/WeightTracker'
import Diary from './pages/Diary'
import NewSignUp from './pages/NewSignUp'
import Home from './pages/Home'

import './App.css'

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
          <Route path="/" element={<Home />} />
          <Route path="/newlogin" element={<NewLogIn setUser={setUser} />} />
          <Route path="/newsignup" element={<NewSignUp />} />

          <Route path="/step" element={<Step />} />
          <Route path="/diary" element={<Diary />} />

          <Route path="/weight" element={<WeightTracker />} />
          <Route path="/macrocalculator" element={<MacroCalculator />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
