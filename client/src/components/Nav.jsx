import { Link } from 'react-router-dom'

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
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <h3>myCalTrack</h3>
      <Link to="/newsignup">Sign Up</Link>
      <Link to="/newlogin">Log In</Link>
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
