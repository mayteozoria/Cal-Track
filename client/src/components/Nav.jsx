import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link className="split" to="/">
          myCalTrack
        </Link>
      </div>
    </nav>
  )
}

export default Nav
