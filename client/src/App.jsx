import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Food from './pages/Food'
import SignUpGoal from './pages/SignUpGoal'
import Diary from './pages/Diary'

import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <header>
        <Nav />
        <Home />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupgoal" element={<SignUpGoal />} />
          <Route path="/food" element={<Food />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
