import { Link } from 'react-router-dom'
import dbblue from '/dbblue.png'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <h3>Welcome {user.email}</h3>
        <Link to="/diary">Food Diary</Link>
        <Link to="/food">Add Foods</Link>
        <Link to="/step">Steps</Link>
        <Link onClick={handleLogOut} to="/">
          Log Out
        </Link>
        <Link to="/">Home</Link>
        {/* <img src={dbblue} alt="dbbell" height={20} /> */}
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      {/* <img src={dbblue} alt="dbbell" height={30} /> */}
      <h3>myCalTrack</h3>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      {/* <Link className="split" to="/">
        myCalTrack
      </Link> */}
    </nav>
  )
  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <div className="welcome-bar" alt="home"></div>
        </Link>

        {user ? userOptions : publicOptions}
      </header>
    </div>
  )
}

export default Nav
