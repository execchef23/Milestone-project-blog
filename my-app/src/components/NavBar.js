import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { useContext } from "react";

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  function handleLogout(e){
    e.preventDefault()
    setCurrentUser(null)
    localStorage.removeItem("token")
    window.location.reload()
  }


  const loginDetail = currentUser ? (
    <>
    <Link to="/new" className="new-blog nav-link">
            New Blog
    </Link>
    Logged in as: {currentUser.username} <button className="btn" type= "button" onClick={handleLogout}>Log Out</button></>
    ) : (
    <>
      <Link to="/SignUp" className="sign-up nav-link">
        Sign Up
      </Link>
      <Link to="/login" className="log-in nav-link">
        Log In
      </Link>
    </>
  );

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Blog Central logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="home nav-link">
            Home
          </Link>
          <div className="nav-link">{loginDetail}</div>
        </div>
        {/* <div>
          <form action="/action_page.php">
            <input type="text" placeholder="Username" name="username"></input>
            <input type="text" placeholder="Password" name="psw"></input>
            <button type="submit">Login</button>
          </form>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
