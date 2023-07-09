import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

import './App.css'
import SignUpLanding from './pages/SignUp'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
        <Home />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
